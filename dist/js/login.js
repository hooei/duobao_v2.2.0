function telLogin(){var t=$("#p-login").find(".login_user"),e=$("#p-login").find(".login_psd");null!=window.sessionStorage.getItem("yzmtel")&&t.val(window.sessionStorage.getItem("yzmtel")),t.focus(function(){t.removeClass("ipt-error"),$(".ipt-error-text").remove()}),e.focus(function(){e.removeClass("ipt-error"),$(".ipt-error-text").remove()}),null!=$.getUrlParam("tel")&&t.val($.getUrlParam("tel")),$(".j-login-button").click(function(){var o=/^(0|86|17951)?1\d{10}$/.test(t.val());if(!o){if(t.hasClass("ipt-error"))return;t.addClass("ipt-error"),$("<span class='ipt-error-text'>请输入正确的手机号</span>").insertAfter(t)}if(e.val()||(e.addClass("ipt-error"),$("<span class='ipt-error-text'>请输入密码</span>").insertAfter(e)),o&&e.val()){$.showIndicator();var r=t.val(),n=CryptoJS.MD5(e.val()).toString();$.ajax({type:"post",url:luanmingli.getUrl+"login",data:{v:luanmingli.srvVersion,content:encryptByDES(JSON.stringify({platform:3,phoneNum:r,password:n,channelid:luanmingli.channel,appversion:luanmingli.version,clienttype:3,deviceId:1}))},async:!0,dataType:"json",success:function(t){$.hideIndicator(),0==t.stateCode?(luanmingli.userId=t.userInfo.userId,luanmingli.userInfo=t.userInfo,window.localStorage.setItem("userId",t.userInfo.userId),window.localStorage.setItem("userInfo",JSON.stringify(t.userInfo)),window.localStorage.setItem("userKey",t.userInfo.userKey),window.localStorage.setItem("mid",CryptoJS.MD5(t.userInfo.userId).toString()),window.localStorage.setItem("loginSrv",luanmingli.getUrl),$.alert("登录成功",function(){$.showIndicator(),window.history.go(-2)})):3==t.stateCode?$.alert("账户不存在，请重试"):10==t.stateCode?$.alert("密码错误，请重试"):$.alert(t.message)}})}})}function qqLogin(){1!=$.getUrlParam("r")&&(window.location.href=window.location.href+"?r=1"),QC.Login({btnId:"qqLoginBtn"}),$("#qqLoginBtn img").attr("src","img/qqlogin.png"),$("#qqLoginBtn img").click(function(){var t=luanmingli.qqLoginReUrl;return/127.0.0.1/.test(window.location.href)&&(t="www.2333db.com/callback/test-qc_back.v210.html"),window.location.href="https://graph.qq.com/oauth2.0/authorize?client_id=101285621&response_type=token&scope=get_user_info&redirect_uri=http%3A%2F%2F"+t+"&display=mobile","height=525,width=585, toolbar=no, menubar=no, scrollbars=no, status=no, location=yes, resizable=yes",!1})}function loginLinkTo(){$(".login-back").click(function(){$.router.back(),$.router.back()}),$("#p-login .linkto").click(function(){$.showIndicator(),$.router.load("register.html")}),$("#p-login .forget_text").click(function(){$.showIndicator(),$.router.load("forget.html")})}$(function(){try{if(window.sessionStorage.getItem("toActRegister")){var t=window.sessionStorage.getItem("toActRegister");window.sessionStorage.removeItem("toActRegister"),/127.0.0.1/.test(window.location.href)?$.router.load("iframe.html?url=http://127.0.0.1:8020/duobao_v2.1.0/other/src/act-register.html?telephone="+t+"&backurl=http://127.0.0.1:8020/duobao_v2.1.0/src/personal.html"):$.router.load("iframe.html?url=http://www.2333db.com/activity/act-register.html?telephone="+t+"&backurl="+luanmingli.bannerBackUrl)}else qqLogin();window.sessionStorage.getItem("fromActRegister")?$.router.load("register.html"):qqLogin(),telLogin(),loginLinkTo()}catch(t){}});