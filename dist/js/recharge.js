function recharge(){var e=$("#p-recharge").find(".choose-num").find(".button");e.click(function(){e.removeClass("choose-num-color"),$(this).addClass("choose-num-color")});var n,o=$("input[type=radio]:checked").attr("class");"wx"==o?n=1:"zfb"==o&&(n=2),$("#p-recharge").find(".recharge-button").click(function(){var e=$("#p-recharge").find(".choose-num").find(".choose-num-color").html()||$("#p-recharge").find(".choose-num").find(".choose-num-color").val();e?/^[0-9]*$/.test(e)?preRecharge(n,e):$.alert("请输入正确的金额"):$.alert("请选择或输入充值金额")})}function preRecharge(e,n){var o="http://www.2333db.com/callback/callback_empty.html";(luanmingli.qktId||luanmingli.thirdId||navigator.userAgent.indexOf("QQ")>-1)&&(o=window.location.href);var t=luanmingli.getUrl+"preCharge?v="+luanmingli.srvVersion+"&content="+encodeURIComponent(encryptByDES(JSON.stringify({way:e,userId:luanmingli.userId,points:n,callBackUrl:o,paySuccessUrl:o})));zfbRecharge(t)}function zfbRecharge(e){window.sessionStorage.setItem("pointsNum",luanmingli.userInfo.detailInfo.points),checkRecharge(),luanmingli.qktId&&!luanmingli.qkt.backUrl||luanmingli.thirdId||navigator.userAgent.indexOf("QQ")>-1?window.location.href=e:window.open(e)}function checkRecharge(){if(null!=window.sessionStorage.getItem("pointsNum")){var e=window.sessionStorage.getItem("pointsNum");$.confirm("是否已完成支付?",function(){$.showIndicator(),setTimeout(function(){$.ajax({type:"post",url:luanmingli.getUrl+"userDetail",data:{v:luanmingli.srvVersion,content:encryptByDES(JSON.stringify({userId:window.localStorage.getItem("userId")}))},async:!0,dataType:"json",success:function(n){n.userInfo.detailInfo.points>e?(window.sessionStorage.removeItem("pointsNum"),$.router.load("recharge-success.html")):(window.sessionStorage.removeItem("pointsNum"),$.router.load("recharge-fail.html"))}})},200)})}}$(function(){try{window.sessionStorage.getItem("fromActRecharge")&&window.sessionStorage.removeItem("fromActRecharge"),recharge(),checkRecharge()}catch(e){}});