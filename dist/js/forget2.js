function forget2(){var e=$("#p-forget2").find(".login_psd");$("#p-forget2").find(".button").click(function(){if(e.each(function(t){e.eq(t).val()||(e.eq(t).addClass("ipt-error"),$("<span class='ipt-error-text'>请设置密码</span>").insertAfter(e.eq(t)))}),e.eq(0).val()&&e.eq(1).val()&&e.eq(0).val()!=e.eq(1).val()&&(e.addClass("ipt-error"),$("<span class='ipt-error-text'>两次密码不一致</span>").insertAfter(e)),e.eq(0).val()&&e.eq(1).val()&&e.eq(0).val()==e.eq(1).val()){var t=$.getUrlParam("tel"),r=CryptoJS.MD5(e.eq(1).val()).toString();$.ajax({type:"post",url:lData.getUrl+"resetPassword",data:{v:lData.srvVersion,content:encryptByDES(JSON.stringify({phoneNum:t,password:r}))},dataType:"json",async:!0,success:function(e){window.sessionStorage.removeItem("yzm"),0==e.stateCode?$.alert("重置成功，请使用新密码登陆",function(){$.showIndicator(),window.history.go(-2)}):3==e.stateCode?$.alert("账户不存在，请重试"):$.alert(e.message)}})}}),e.focus(function(){e.removeClass("ipt-error"),$(".ipt-error-text").remove()})}$(function(){try{forget2()}catch(e){}});