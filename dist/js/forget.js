function forget(){var e=$("#p-forget").find(".login_user"),t=$("#p-forget").find(".login_psd");null!=window.sessionStorage.getItem("yzmtel")&&e.val(window.sessionStorage.getItem("yzmtel")),$("#p-forget").find(".get_yzm").click(function(){if(((new Date).getTime()-cookie.getCookie("yzmtime"))/1e3<100)return void $.alert("请勿频繁发送");var t=/^(0|86|17951)?1\d{10}$/.test(e.val());t?_getScript("js/yzmDY.js",function(){yzmDY(e,"bind")}):(e.addClass("ipt-error"),$("<span class='ipt-error-text'>请输入正确的手机号</span>").insertAfter(e))}),$("#p-forget").find(".linkto").click(function(){var r=/^(0|86|17951)?1\d{10}$/.test(e.val());if(!r){if(e.hasClass("ipt-error").length>0)return;e.addClass("ipt-error"),$("<span class='ipt-error-text'>请输入正确的手机号</span>").insertAfter(e)}if(!t.val()){if(t.hasClass("ipt-error").length>0)return;t.addClass("ipt-error"),$("<span class='ipt-error-text'>请输入验证码</span>").insertAfter(t)}r&&t.val()&&(window.sessionStorage.getItem("yzm")==t.val()&&window.sessionStorage.getItem("yzmtel")==$(".login_user").val()?($.showIndicator(),$.router.load("forget2.html?tel="+e.val())):window.sessionStorage.getItem("yzmtel")!=$(".login_user").val()?0==$(".ipt-error").length&&(e.addClass("ipt-error"),$("<span class='ipt-error-text'>请输入正确的手机号</span>").insertAfter(e)):0==$(".ipt-error").length&&(t.addClass("ipt-error"),$("<span class='ipt-error-text'>验证码输入错误</span>").insertAfter(t)))}),e.focus(function(){e.removeClass("ipt-error"),$(".ipt-error-text").remove()}),t.focus(function(){t.removeClass("ipt-error"),$(".ipt-error-text").remove()})}$(function(){forget()});