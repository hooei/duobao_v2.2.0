function actRegisterBtn(t){lData.userId?$.alert('您已经是黄金夺宝老主顾啦～我们为您奉上"充值狂欢大礼包"',function(){window.sessionStorage.removeItem("fromActRegister")}):$.router.load(t)}function actRechargeBtn(t){$.router.load(t)}function actRegisterSuccessBtn(t){$.router.load("index.html")}$(function(){$("#iframe").attr("src",window.location.href.split("?url=")[1]),$("#p-iframe .iframe-back").click(function(){event.preventDefault(),sessionStorage.getItem("sm.router.maxStateId")<=1?$.router.load("index.html"):$.router.back()}),/extract/.test(window.location.href)});