/*
* @Author: suifengtec
* @Date:   2017-11-04 22:47:42
* @Last Modified by:   suifengtec
* @Last Modified time: 2017-11-04 23:08:50
*/
jQuery(document).ready(function($) {
        var contact = $('#contact');
        var  contactBtn = contact.find('#submit');

        var formAlert = contact.find('#form-alert');
        contactBtn.on('click',function(e){
            e.preventDefault();
            var uname = contact.find('#uname').val();
            var uemail = contact.find('#uemail').val();
            var umsg = contact.find('#umsg').val();
            if(!v.isEnableStr(uname)){
                formAlert.html('用户名不能为空').show();
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

        if(!v.isEnableStr(umsg)){
                formAlert.html('留言内容不能为空').show();
                return ;
            }else{
             formAlert.html('').hide();
            }


    contactBtn.attr('disabled','disabled');

                   $.ajax({
                       url: '../../contactHandler/',
                       type: 'POST',
                       dataType: 'json',
                       data: {
                        "user_login": uname,
                        "user_email":uemail,
                        "user_msg":umsg,
                        "csrf_name" : $('#csrf_name').val(),
                        "csrf_value" :  $('#csrf_value').val()
                        }
                   })
                   .done(function(u) {

                            console.log(u);

                        if(u.user_login){
                                formAlert.html('信息记录成功，请稍候...').show();
                                window.location.href = '../../contact';
                       }else{
                                formAlert.html('信息记录失败,请重试...').show();
                                signinBtn.removeAttr('disabled');
                       }
                   })
                   .fail(function() {
                        contactBtn.removeAttr('disabled');
                       console.log('fail');
                   })
                   .always(function() {
                     window.location.href = '../../contact';
                       console.log('complete');
                   });


        });


});