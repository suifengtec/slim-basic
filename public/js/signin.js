/*
* @Author: suifengtec
* @Date:   2017-11-03 14:22:28
* @Last Modified by:   suifengtec
* @Last Modified time: 2017-11-05 01:36:34
*/
jQuery(document).ready(function($) {

        var form = $('#signin');
        var  submitBtn = form.find('#submit');

        var formAlert = form.find('#form-alert');

  submitBtn.on('click',function(e){

        e.preventDefault();
        var uname = form.find('#uname').val();
        var upwd = form.find('#upwd').val();

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
    submitBtn.attr('disabled','disabled');

/*var csrfName = document.getElementById('csrf_name').value;
var csrfValue = document.getElementById('csrf_value').value;*/
/*var csrfName = $('#csrf_name').val();
var csrfValue = $('#csrf_value').val();*/



           $.ajax({
               url: '../../login/',
               type: 'POST',
               dataType: 'json',
               data: {
                "user_login": uname,
                "user_pass":upwd,
                "csrf_name" : form.find('#csrf_name').val(),
                "csrf_value" :  form.find('#csrf_value').val()
                }
           })
           .done(function(u) {
                if(u.user_login){
                        formAlert.html('登录成功，请稍候...').show();
                        window.location.href = '../../dashboard';
               }else{

                        formAlert.html(u.msg).show();
                        submitBtn.removeAttr('disabled');
                        window.location.href = '../../signin';
                    /*    submitBtn.removeAttr('disabled');*/

               }
           })
           .fail(function() {
               console.log('fail');
               window.location.href = '../../signin';
           })
           .always(function() {

               console.log('complete');


           });



      });

});