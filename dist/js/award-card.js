function awardGetData(){var a=$.parseJSON(window.sessionStorage.getItem("prizeInfo"));awardStatus(a)}function awardStatus(a){a.hasdone;return $(".j-address-button").find(".button").remove(),$(".a-address-text").find("*").remove(),$(".status-info-list").find(".active").removeClass("active"),$(".j-confirm-box").find(".button").remove(),$(".a-award-shiping").html(""),$(".j-confirm-box").html(""),awardFillData(a),1==a.hasdone?void(0==$(".j-card-finish-1 > div").length&&alreadyFinish(a)):($(".status-info-list").find(".item-content").eq(1).addClass("active"),202==a.goodstype?($(".j-card-exchange-box .titletext").html("选择使用方式"),$(".award-card-ul-box").show(),$("#award-card-choose-way-btn").click(function(){window.sessionStorage.setItem("prizeForceRefresh",1);var e=$(".j-card-exchange-way input[name='awardCardRadio']:checked").attr("id");"awardCardRadio-1"==e?$.confirm("确定兑换卡号卡密？",function(){window.sessionStorage.setItem("prizeForceRefresh",1),awardCardRadioCard(a)}):"awardCardRadio-2"==e&&$.confirm("确定兑换等额金币？",function(){window.sessionStorage.setItem("prizeForceRefresh",1),awardCardRadioGold(a)})})):203==a.goodstype&&($(".j-card-exchange-box .titletext").html("确认领奖夺宝账号"),$(".award-card-jd-box").show(),$("#award-card-choose-way-btn").click(function(){window.sessionStorage.setItem("prizeForceRefresh",1),awardCardJd(a)})),window.sessionStorage.getItem("awardCardRadioCardFinish")&&awardCardRadioCardFinish($.parseJSON(window.sessionStorage.getItem("awardCardRadioCardFinish"))),window.sessionStorage.getItem("awardCardRadioGoldFinish")&&awardCardRadioGoldFinish($.parseJSON(window.sessionStorage.getItem("awardCardRadioGoldFinish"))),void(window.sessionStorage.getItem("awardCardJdFinish")&&awardCardJdFinish($.parseJSON(window.sessionStorage.getItem("awardCardJdFinish")))))}function awardCardRadioCard(a){$.showIndicator(),$.ajax({type:"post",url:lData.getUrl+"exchangeCard",data:{v:lData.srvVersion,content:encryptByDES(JSON.stringify({userKey:window.localStorage.getItem("userKey"),optType:2,treasureId:a.treasureId}))},async:!0,dataType:"json",success:function(a){0==a.stateCode?(window.sessionStorage.setItem("awardCardRadioCardFinish",JSON.stringify(a)),awardCardRadioCardFinish(a)):$.alert(a.message),$.hideIndicator()}})}function awardCardRadioCardFinish(a){$(".j-card-exchange-time").html(a.card.getCardTime),$(".award-card-ul-box").hide(),$(".award-card-button-box").hide(),$(".award-card-choose-finish-1").show(),$(".j-card-finish").show(),$(".j-card-finish-1").show(),0==$(".j-card-finish-1 > div").length&&$(".j-card-finish-1").append("<div>卡号：<span>"+a.card.cardNum+"</span></div><div>密码：<span>"+a.card.cardPwd+"</span></div>"),$(".j-card-finish-1-info").show(),$(".status-info-list").find(".active").removeClass("active"),$(".j-card-finish-box .titletext").html("卡号/卡密 派发成功"),$(".j-card-finish-time").html(a.card.getCardTime),$("#award-card-pswd-description").on("click",function(){if(/127.0.0.1/.test(window.location.href)){var a=window.location.href.split("src/")[0]+"other/html/card-description.html";$.router.load("iframe.html?url="+a)}else $.router.load("iframe.html?url=http://www.2333db.com/html/card-description.html")})}function awardCardRadioGold(a){$.showIndicator(),$.ajax({type:"post",url:lData.getUrl+"exchangeCard",data:{v:lData.srvVersion,content:encryptByDES(JSON.stringify({userKey:window.localStorage.getItem("userKey"),optType:1,treasureId:a.treasureId}))},async:!0,dataType:"json",success:function(a){0==a.stateCode?(window.sessionStorage.setItem("awardCardRadioGoldFinish",JSON.stringify(a)),awardCardRadioGoldFinish(a)):$.alert(a.message),$.hideIndicator()}})}function awardCardRadioGoldFinish(a){$(".j-card-exchange-time").html(a.card.getCardTime),$(".award-card-ul-box").hide(),$(".award-card-button-box").hide(),$(".award-card-choose-finish-2").show(),$(".j-card-finish").show(),$(".j-card-finish-2").show(),$(".j-card-finish-2").append("<div>您已兑换"+a.card.cardValue+"金币</div><div>请到个人页账户余额中查看</div>"),$(".status-info-list").find(".active").removeClass("active"),$(".j-card-finish-box .titletext").html("金币派发成功"),$(".j-card-finish-time").html(a.card.getCardTime)}function awardCardJd(a){if(!$(".award-card-jd-ipt").val())return void $.alert("请输入手机号");var e=/^(0|86|17951)?1\d{10}$/.test($(".award-card-jd-ipt").val());return e?void $.confirm("确定派发到该夺宝账号？",function(){window.sessionStorage.setItem("prizeForceRefresh",1),$.showIndicator(),$.ajax({type:"post",url:lData.getUrl+"exchangeCard",data:{v:lData.srvVersion,content:encryptByDES(JSON.stringify({userKey:window.localStorage.getItem("userKey"),optType:3,treasureId:a.treasureId,telephone:$(".award-card-jd-ipt").val()}))},async:!0,dataType:"json",success:function(a){0==a.stateCode?(window.sessionStorage.setItem("awardCardJdFinish",JSON.stringify(a)),awardCardJdFinish(a)):$.alert(a.message),$.hideIndicator()}})}):void $.alert("请输入正确的手机号")}function awardCardJdFinish(a){$(".j-card-exchange-time").html(a.card.getCardTime),$(".award-card-jd-box").hide(),$(".award-card-button-box").hide(),$(".status-info-list").find(".active").removeClass("active"),$(".j-card-finish-box .titletext").html("卡号/卡密派发成功"),$(".j-card-finish-time").html(a.card.getCardTime),$(".j-card-finish").show(),$(".j-card-finish-3").show()}function timeNowFormat(a){var e=a.getFullYear(),t=a.getMonth()>=9?parseInt(a.getMonth())+1:"0"+(parseInt(a.getMonth())+1),d=a.getDate()>9?a.getDate():"0"+a.getDate(),r=a.getHours()>9?a.getHours():"0"+a.getHours(),i=a.getMinutes()>9?a.getMinutes():"0"+a.getMinutes(),s=a.getSeconds()>9?a.getSeconds():"0"+a.getSeconds();return e+"-"+t+"-"+d+" "+r+":"+i+":"+s}function alreadyFinish(a){$.showIndicator(),$.ajax({type:"post",url:lData.getUrl+"exchangeCard",data:{v:lData.srvVersion,content:encryptByDES(JSON.stringify({userKey:window.localStorage.getItem("userKey"),optType:4,treasureId:a.treasureId}))},async:!0,dataType:"json",success:function(e){0==e.stateCode?202==a.goodstype&&e.card?e.card.cardValue?awardCardRadioGoldFinish(e):awardCardRadioCardFinish(e):203==a.goodstype&&awardCardJdFinish(e):$.alert(e.message),$.hideIndicator()}})}function awardFillData(a){$(".a-award-time").html(a.lotteryTime),$("#p-award-card").find(".module2").length>0&&$("#p-award-card").find(".module2").remove(),$("#p-award-card").find(".module-first").after('<div class="module2 card z_my_prize_model"><div class="card-content"><div class="list-block media-list"><ul><li><div class="item-content"><div class="item-inner"><div class="item-title label">商品信息</div></div></div></li><li class="item-content clearfix"><div class="item-media prize_image" style="background-image:url('+a.icon+');"></div><div class="item-inner clearfix"><div class="item-title-row"><div class="item-title z_prize_title">'+a.description+'</div></div><div class="item-subtitle z_prize_content"><p>期号：'+a.phaseNumber+"</p><p>总需："+a.totalCount+"人次</p><p>幸运号码："+a.luckyCode+"</p><p>本期参与："+a.buyCount+"人次</p><p>揭晓时间："+a.lotteryTime+"</p></div></div></li></ul></div></div></div>")}function awardAddFillData(a,e){$(".j-address-button").html(e.addressTime),$("#p-award-card").find(".module3").length>0&&$("#p-award-card").find(".module3").remove(),$("#p-award-card").find(".module-first").after('<div class="module3 module1"><div class="list-title">地址信息</div><div class="list-block"><ul class="status-info-list"><li class="item-content"><div class="item-inner"><div class="item-title"><span>'+e.name+'</span><span class="pull-right" style="padding-right:.65rem;">'+e.telephone+'</span><p style="white-space:normal;">'+e.address+"</p></div></div></li></ul></div></div>")}function awardShipFillData(a){$(".a-award-shiping").html(a.expressTime),$("#p-award-card").find(".module4").length>0&&$("#p-award-card").find(".module4").remove(),$("#p-award-card").find(".module-first").after('<div class="module4 module1"><div class="list-title">物流信息</div><div class="list-block"><ul class="status-info-list"><li class="item-content"><div class="item-inner"><div class="item-title"><p>物流公司：'+a.expressComputer+"</p><p>运单号码："+a.chargeId+"</p></div></div></li></ul></div></div>")}function awardAddressButton(a){if($(".j-address-button").find(".button").remove(),$(".a-address-text").find("*").remove(),0==a.length)$(".j-address-button").append("<div onclick=\"awardEditAdd('','','','',2);\" class=\"insert button\">新增地址</div>");else{$(".j-address-button").append('<div onclick="awardChoose();" class="choose button">确认</div><div onclick="awardOther();" class="other button">使用其他</div>');var e=0;$.each(a,function(a,t){1==t.isDefault?awardAddressFill(t):e+=1}),e==a.length&&awardAddressFill(a[0])}}function awardAddressFill(a){$(".a-address-text").find("*").remove(),lData.awardAddId=a.id,$(".a-address-text").append("<span>"+a.name+'</span><span style="position:absolute;right:.5rem;top:.25rem;">'+a.telephone+"</span><div>"+awardChoseAddPlus(a)+"</div>")}function awardChoseAddPlus(a){return a.address1?a.address4?a.address1+a.address2+a.address3+a.address4+a.address:a.address1+a.address2+a.address3+a.address:a.address}function awardChoose(){$.confirm("确认提交收货地址吗？",function(){var a=$.parseJSON(window.sessionStorage.getItem("prizeInfo")).treasureId;$.ajax({type:"post",url:lData.getUrl+"changePrizeStatus",data:{v:lData.srvVersion,content:encryptByDES(JSON.stringify({userKey:window.localStorage.getItem("userKey"),treasureId:a,status:2,addressId:lData.awardAddId}))},async:!0,dataType:"json",success:function(a){var e=a.prize,t=$.parseJSON(window.sessionStorage.getItem("prizeInfo"));0==e.treasureId&&(e.treasureId=t.treasureId),0==e.totalCount&&(e.totalCount=t.totalCount),0==e.phaseNumber&&(e.phaseNumber=t.phaseNumber),e.icon||(e.icon=t.icon),$.showIndicator(),window.sessionStorage.setItem("prizeInfo",JSON.stringify(e)),window.sessionStorage.setItem("prizeForceRefresh",1),setTimeout(function(){awardStatus(e),$.hideIndicator()},500)}})})}function awardOther(a){if($.closeModal(".receipt-popup"),2!=a){$.popup('<div class="popup award-popup"><header class="bar bar-nav c_header"><a onclick="awardOtherCancel();" class="icon pull-left">取消</a><h1 class="title">选择地址</h1><a onclick="awardEditAdd();" class="j-receipt-insert pull-right">添加地址</a></header><div class="list-block"><ul class="award-popup-list" style="margin-top:2.2rem;"></ul></div></div>');var e=$.parseJSON(window.sessionStorage.getItem("prizeAddress"));$.each(e,function(a,e){$(".award-popup-list").append('<li class="item-content">'+function(a){return a==lData.awardAddId?'<div class="item-media"><i class="icon icon-check" style="color:#da3651;font-size:1rem;font-weight:bold;"></i></div>':""}(e.id)+'<div onclick="awardAddressChose('+a+');" class="item-inner"><div class="item-title"><span>'+e.name+'</span><span style="margin-left:1rem;">'+e.telephone+'</span><p style="margin:0;">'+awardChoseAddPlus(e)+'</p></div><div onclick="awardEditAdd('+e.id+",'"+e.name+"',"+e.telephone+",'"+e.address+"',1,"+e.code1+","+e.code2+","+e.code3+","+e.code4+",'"+e.address1+"','"+e.address2+"','"+e.address3+"','"+e.address4+'\');" class="item-after"><i class="icon icon-edit d5"></i></div></div></li>')})}}function awardOtherCancel(){$.closeModal(".award-popup");var a=$.parseJSON(window.sessionStorage.getItem("prizeAddress"));$.each(a,function(e,t){t.id==lData.awardAddId&&awardAddressFill(a[e])})}function awardAddressChose(a){$.showIndicator(),setTimeout(function(){$.closeModal(".award-popup");var e=$.parseJSON(window.sessionStorage.getItem("prizeAddress"));awardAddressFill(e[a]),$.hideIndicator()},500)}function awardEditAdd(a,e,t,d,r,i,s,o,n,c,l,p,u){event.stopPropagation();var w=a?a:"''",m=e?e:"",h=t?t:"",v=d?d:"";$.popup('<div class="popup receipt-popup"><header class="bar bar-nav c_header"><a class="icon pull-left" onclick="awardOther('+r+');">取消</a><h1 class="title">'+function(a){return a?"修改":"新增"}(a)+'收货地址</h1><a class="icon pull-right" onclick="awardAddEditSave('+w+","+r+');">保存</a></header><div class="content"><div class="list-block"><ul><li class="item-content"><input class="receipt-name" type="text" placeholder="收货人姓名" value="'+m+'" /></li><li class="item-content"><input class="receipt-tel" type="text" placeholder="手机号码" value="'+h+'" /></li><li class="item-content u-address-choose"><span>所在地区</span><input type="text" id="picker" readonly /><a class="icon icon-right"></a></li><li class="item-content"><textarea class="receipt-address" type="text" placeholder="详细地址 （街道、楼牌号等）">'+v+"</textarea></li></ul></div></div></div>",!0),i&&"null"!=i&&"undefined"!=i&&($("#picker").attr("data-lv1",i),$("#picker").attr("data-lv2",s),$("#picker").attr("data-lv3",o),n?$("#picker").attr("data-lv4",n):$("#picker").removeAttr("data-lv4")),c&&"undefined"!=c&&"null"!=c?u&&"undefined"!=u&&"null"!=u?($("#picker").val(c+l+p+u),$("#picker").val(c+l+p+u),$("#picker").attr("data-lvname1",c),$("#picker").attr("data-lvname2",l),$("#picker").attr("data-lvname3",p),$("#picker").attr("data-lvname4",u)):($("#picker").val(c+l+p),$("#picker").val(c+l+p+u),$("#picker").attr("data-lvname1",c),$("#picker").attr("data-lvname2",l),$("#picker").attr("data-lvname3",p)):($("#picker").val(""),$(".receipt-address").val("")),_getScript("js/address-picker.js",function(){addPicker()})}function awardAddEditSave(a,e){var t=$(".receipt-name"),d=$(".receipt-tel"),r=$(".receipt-address"),i=/^(0|86|17951)?1\d{10}$/.test(d.val());return t.val()?i?$("#picker").val()?r.val()?void(t.val()&&i&&r.val()&&(a?receiptUpdate(a,t.val(),d.val(),r.val()):receiptInsert(t.val(),d.val(),r.val(),e))):void $.toast("详细地址不能未空",1e3):void $.toast("请选择地址",1e3):void $.toast("请输入正确的手机号码",1e3):void $.toast("收货人姓名不能未空",1e3)}function receiptUpdate(a,e,t,d){$.ajax({type:"get",url:lData.getUrl+"addressManager",data:{v:lData.srvVersion,content:encryptByDES(JSON.stringify({userId:lData.userId,way:3,addressId:a,address:d,telephone:t,name:e,code1:$("#picker").attr("data-lv1"),code2:$("#picker").attr("data-lv2"),code3:$("#picker").attr("data-lv3"),code4:$("#picker").attr("data-lv4")?$("#picker").attr("data-lv4"):"0",address1:$("#picker").attr("data-lvname1"),address2:$("#picker").attr("data-lvname2"),address3:$("#picker").attr("data-lvname3"),address4:$("#picker").attr("data-lvname4")?$("#picker").attr("data-lvname4"):""}))},async:!0,dataType:"json",success:function(a){0==a.stateCode&&($.showIndicator(),setTimeout(function(){$.closeModal(".receipt-popup"),window.sessionStorage.setItem("prizeAddress",JSON.stringify(a.addlist)),awardOther(),$.hideIndicator()},500))}})}function receiptInsert(a,e,t,d){$.ajax({type:"get",url:lData.getUrl+"addressManager",data:{v:lData.srvVersion,content:encryptByDES(JSON.stringify({userId:lData.userId,way:2,address:t,telephone:e,name:a,code1:$("#picker").attr("data-lv1"),code2:$("#picker").attr("data-lv2"),code3:$("#picker").attr("data-lv3"),code4:$("#picker").attr("data-lv4")?$("#picker").attr("data-lv4"):"0",address1:$("#picker").attr("data-lvname1"),address2:$("#picker").attr("data-lvname2"),address3:$("#picker").attr("data-lvname3"),address4:$("#picker").attr("data-lvname4")?$("#picker").attr("data-lvname4"):""}))},async:!0,dataType:"json",success:function(a){0==a.stateCode&&($.showIndicator(),setTimeout(function(){if($.closeModal(".receipt-popup"),window.sessionStorage.setItem("prizeAddress",JSON.stringify(a.addlist)),$.hideIndicator(),2==d){var e=$.parseJSON(window.sessionStorage.getItem("prizeInfo"));return void awardStatus(e)}awardOther()},500))}})}function awardConfirmGet(){if(!($(".j-confirm-get").length>0)){$(".j-confirm-box").append('<div onclick="awardConfirmGetBtn(this);" class="button j-confirm-get">确认收货</div>');var a=$.parseJSON(window.sessionStorage.getItem("prizeInfo"));3!=a.hasdone&&$(".j-confirm-get").css("background-color","#b0b0b0")}}function awardConfirmGetBtn(a){var e=$.parseJSON(window.sessionStorage.getItem("prizeInfo"));3==e.hasdone&&$.confirm("是否确认收货？",function(){var a=$.parseJSON(window.sessionStorage.getItem("prizeInfo")).treasureId;$.ajax({type:"post",url:lData.getUrl+"changePrizeStatus",data:{v:lData.srvVersion,content:encryptByDES(JSON.stringify({userKey:window.localStorage.getItem("userKey"),treasureId:a,status:1}))},async:!0,dataType:"json",success:function(a){var e=a.prize,t=$.parseJSON(window.sessionStorage.getItem("prizeInfo"));0==e.treasureId&&(e.treasureId=t.treasureId),0==e.totalCount&&(e.totalCount=t.totalCount),0==e.phaseNumber&&(e.phaseNumber=t.phaseNumber),e.icon||(e.icon=t.icon),$.showIndicator(),window.sessionStorage.setItem("prizeInfo",JSON.stringify(e)),window.sessionStorage.setItem("prizeForceRefresh",1),setTimeout(function(){awardStatus(e),$.hideIndicator()},500)}})})}function awardRefresh(){awardGetData()}$(function(){try{$("#award-card-pswd-description").length>0&&$("#award-card-pswd-description").on("click",function(){if(/127.0.0.1/.test(window.location.href)){var a=window.location.href.split("src/")[0]+"other/html/card-description.html";$.router.load("iframe.html?url="+a)}else $.router.load("iframe.html?url=http://www.2333db.com/html/card-description.html")}),$(".module4").remove(),$(".module3").remove(),$(".module2").remove(),awardGetData(),dropRefresh("#p-award-card",awardRefresh)}catch(a){}});