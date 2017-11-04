/*
* @Author: suifengtec
* @Date:   2017-11-02 14:29:52
* @Last Modified by:   suifengtec
* @Last Modified time: 2017-11-05 01:36:58
*/

jQuery(document).ready(function($) {



    var signup = $('#signup');
    var  submitBtn = signup.find('#submit');
      var formAlert = signup.find('#form-alert');

    submitBtn.on('click',function(e){

        e.preventDefault();


        var uname = signup.find('#uname').val();
        var upwd = signup.find('#upwd').val();
        var upwdr = signup.find('#upwdr').val();
        var uemail = signup.find('#uemail').val();
        var ref = signup.find('#ref-id').val();


        if(!v.isEnableStr(uname)){
            formAlert.html('用户名不能为空').show();
            return ;
        }else{
         formAlert.html('').hide();
        }
        if(!v.isEnableStr(upwd)){
            formAlert.html('密码不能为空').show();
            return ;
        }else{
         formAlert.html('').hide();
        }

        if(!v.isPwdEnable(upwd)){
            formAlert.html('密码至少应有6位').show();
            return ;
        }else{
         formAlert.html('').hide();
        }
        if(!v.isPwdMatch(upwd,upwdr)){
            formAlert.html('密码不相同').show();
            return ;
        }else{
         formAlert.html('').hide();
        }

        if(!v.isEnableStr(uemail)){
            formAlert.html('电邮地址不能为空').show();
            return ;
        }else{
         formAlert.html('').hide();
        }
        if(!v.isEmailEnable(uemail)){
            formAlert.html('请输入有效的电邮地址！').show();
            return ;
        }else{
         formAlert.html('').hide();
        }

        $data = {
            'user_login': uname,
            'user_pass':upwd,
            'user_email':uemail,
            'ref':ref,
            "csrf_name" : $('#csrf_name').val(),
            "csrf_value" :  $('#csrf_value').val()
       };

    submitBtn.attr('disabled','disabled');
       $.ajax({
           url: '../../users/',
           type: 'POST',
           dataType: 'json',
           data: $data,
       })
       .done(function(u) {

          if(u.user_login){
              formAlert.html('注册成功，请稍候...').show();
             console.log("success");
             window.location.href = '../../signin';
           }else{
                        formAlert.html(u.msg).show();
                        submitBtn.removeAttr('disabled');
                        window.location.href = '../../signup';
           }


       })
       .fail(function(u) {
           console.log("error");
       })
       .always(function(u) {
           console.log("complete");
       });


    });





});