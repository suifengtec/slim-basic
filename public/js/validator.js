/*
* @Author: suifengtec
* @Date:   2017-11-03 14:23:46
* @Last Modified by:   suifengtec
* @Last Modified time: 2017-11-05 00:09:00
*/
/*
a simple validator by suifengtec.
 */
var v  = {

    isEnableStr:function (str){
        return str&&str.length;
    },
    isPwdEnable:function(upwd,minLen=6){

        if(upwd.length<6){
            return false;
        }{
            return true;
        }
    },
    isPwdMatch(upwd,upwdr){

        return upwd===upwdr;
    },
    isEmailEnable:function(uemail){

        if(!this. isEnableStr(uemail)){
            return false;
        }
     /*   var re =  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;*/
        var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        return re.test(uemail);

    }

}