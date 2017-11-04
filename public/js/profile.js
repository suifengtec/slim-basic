/*
* @Author: suifengtec
* @Date:   2017-11-04 23:59:36
* @Last Modified by:   suifengtec
* @Last Modified time: 2017-11-05 01:05:00
*/

jQuery(document).ready(function($) {

        var form = $('#profile');
        var submitBtn = form.find('#submit');
        var formAlert =form.find('#form-alert');

        submitBtn.on('click',function(e){

            e.preventDefault();


            var uid = form.find('#uid').val();
            var upwd = form.find('#upwd').val();
            var upwdn = form.find('#upwdn').val();

            submitBtn.attr('disabled','disabled');
                 if(!v.isEnableStr(uid)){
                     submitBtn.removeAttr('disabled');
                     console.log('用户ID为空');
                        return ;
                 }

                 if(!v.isEnableStr(upwdn)){
                     submitBtn.removeAttr('disabled');
                     console.log('密码为空');
                        return ;
                 }

                    if(!v.isEnableStr(upwd)){
                        formAlert.html('密码不能为空').show();
                         submitBtn.removeAttr('disabled');
                        return ;
                    }else{
                     formAlert.html('').hide();
                    }

                   if(v.isPwdMatch(upwd,upwdn)){
                        formAlert.html('新旧密码相同,不用更改！').show();
                         submitBtn.removeAttr('disabled');
                        return ;
                    }else{
                     formAlert.html('').hide();
                    }

                   $.ajax({
                       url: '../../profile/'+uid+'/',
                       type: 'PUT',
                       dataType: 'json',
                       data: {

                        "user_pass":upwd,
                        "user_pass_new":upwdn,
                        "csrf_name" : form.find('#csrf_name').val(),
                        "csrf_value" :  form.find('#csrf_value').val()
                        }
                   })
                   .done(function(u) {

                    console.log(u);

                        if(u.user_login){
                             console.log('done');
                                formAlert.html('密码已更改!').show();

                                    submitBtn.removeAttr('disabled');
                              /*  window.location.href = '../../dashboard';*/
                       }else{

                                formAlert.html(u.msg).show();
                                      submitBtn.removeAttr('disabled');
                             /*   window.location.href = '../../dashboard';*/


                       }
                   })
                   .fail(function(u) {
                    console.log(u);
                       console.log('fail');
                         submitBtn.removeAttr('disabled');
                      /* window.location.href = '../../signin';*/
                   })
                   .always(function(u) {
                     /*   console.log(u);*/
                       console.log('complete');


                   });

        });

});