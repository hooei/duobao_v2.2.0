function getDetail(e,t){$.showIndicator(),$.ajax({type:"get",url:lData.getUrl+"getTreasureDetail",data:{treasureId:e,userId:lData.userId,type:t,v:lData.srvVersion},async:!0,dataType:"json",success:function(e){if(0==e.stateCode){if(window.sessionStorage.setItem("payGoodsType",e.treasureInfo.goodstype),duobaoFillData(e),e.previousPhaseNumber&&fillLastData(e),e.myLuckyNumber){var t=e.myLuckyNumber.split("&"),a=$.map(t,function(e){return e?e:null});fillLuckyNum(a)}fillButton(e)}else $.alert(e.message);$.hideIndicator()}})}function duobaoFillData(e){$("#duobao-detail-data").find("*").remove(),$("#duobao-detail-data").append('<div valign="bottom" class="card-header color-white no-border no-padding"><img class="z_d_image card-cover" src="'+e.treasureInfo.goodsInfo.picUrl+'" alt=""></div><div class="card-content"><div class="card-content-inner" id="db-goods-info"><p class="title_name"><span class="z_prizeTitle">'+e.treasureInfo.goodsInfo.describe+"</span></p>"+scheduleInfo(e)+'</div></div><div class="card-footer d_detail_linkto" onclick="dbDetailLink(\''+e.treasureInfo.goodsInfo.detailUrl+"',"+e.treasureInfo.goodstype+');">'+dbDetailText(e.treasureInfo.goodstype)+'<a class="icon icon-right pull-right"></a></div><div class="card-footer duobao_linkto" onclick="dbPartnerLink('+e.treasureInfo.treasureId+","+e.treasureInfo.participantCount+');"><div class="d_link_text">本期参与者</div><a class="icon icon-right pull-right"></a></div>')}function dbDetailText(e){return 2==e?'<div class="d_link_text">宝箱玩法</div>':'<div class="d_link_text">商品详情</div>'}function scheduleInfo(e){return 1==e.treasureInfo.status?'<span class="z_periodNum-box">期号：第<span class="z_periodNum">'+e.treasureInfo.phaseNumber+'</span>期</span><div class="duobao_schedule_bar d_schedule_bar"><div class="duobao_scheduling d_scheduling" id="d_scheduling" style="width:'+e.treasureInfo.participantCount/e.treasureInfo.totalCount*100+'%;"></div></div><p class="clearfix" style="margin: .2rem 0 0 0;color: #5d5d5d;"><span class="pull-left">总需'+e.treasureInfo.totalCount+'人次</span><span class="pull-right">剩余<span style="color:#359df5;">'+(e.treasureInfo.totalCount-e.treasureInfo.participantCount)+"</span></span></p>":e.luckyUserOrder?'<div class="duobao-have-lottery"><p>幸运得主：'+e.luckyUserName+"</p><p>用户ID："+e.luckyUserOrder.userid+"</p><p>期号：第"+e.treasureInfo.phaseNumber+"期</p><p>本期参与："+e.luckyUserOrder.buyCount+"人次</p><p>揭晓时间："+e.treasureInfo.lotteryTime+'</p><p>幸运号码：<span style="font-size:1rem;">'+e.luckyUserOrder.luckCode+'</span></p><div onclick="linkToCalc('+e.treasureInfo.treasureId+","+e.treasureInfo.goodstype+');" class="button">计算详情</div></div>':(timeCutDown(e.treasureInfo.remainingTime),'<div class="duobao-have-lottery"><p>期号：第'+e.treasureInfo.phaseNumber+'期</p><p>揭晓时间：<span class="timeCutDown"><span></p><div onclick="linkToCalc('+e.treasureInfo.treasureId+","+e.treasureInfo.goodstype+');" class="button">计算详情</div></div>')}function timeCutDown(e){CutDownTimer&&clearInterval(CutDownTimer),CutDownTimer=setInterval(function(){e-=.01;var t=Math.floor(e/60)>9?Math.floor(e/60):"0"+Math.floor(e/60),a=Math.floor(e%60)>9?Math.floor(e%60):"0"+Math.floor(e%60),o=(e%60-Math.floor(e%60)).toString().substring(2,4),s=t+":"+a+":"+o;if($(".timeCutDown").html(s),e<=.5){$(".timeCutDown").html("获取结果中……"),clearInterval(CutDownTimer);var r=$.getUrlParam("treasureId");setTimeout(function(){getDetail(r)},1e3),window.sessionStorage.setItem("recordForceRefresh","0&1&2"),window.sessionStorage.setItem("prizeForceRefresh","1"),setTimeout(function(){$.hideIndicator()},500)}},10)}function linkToCalc(e,t){2==t||201==t||202==t||203==t?$.router.load("calc.html?treasureId="+e+"&goodtype=2"):$.router.load("calc.html?treasureId="+e)}function fillLastData(e){$(".z_d_last").remove(),$("#p-duobao").find(".content").append('<div class="card z_d_last"><div class="card-content"><div class="card-content-inner clearfix"><p class="d_last_luck pull-left">[第<span class="d_last_period">'+e.previousPhaseNumber+'</span>期]得主: <span class="d_last_name">'+e.previousLuckyUserName+'</span></p><div class="d_last_text pull-right">参与<span class="d_last_count">'+e.previousLuckyUserOrder.buyCount+'</span>人次</div></div></div><div onclick="dbWinRecordLink('+e.treasureInfo.treasureId+')" class="card-footer z_d_last_link" style="padding-left: 1rem;"><div>往期揭晓</div><div class="icon icon-right pull-right"></div></div></div>')}function fillButton(e){$(".z_db_box").remove(),$(".content").removeClass("z-havelottery-bar-height"),1==e.treasureInfo.status?$("#p-duobao").append('<div class="z_db_box bar bar-footer"><div class="card"><div class="card-content"><div class="row card-content-inner clearfix"><div class="col-66 select_num pull-left"><span onclick="dbNumMinus();" class="z_d_minus"><i class="d_minus"></i></span><span class="select_text">参与</span><input class="d_ipt_num" type="number" pattern="[0-9]*" value="'+e.treasureInfo.fewestCount+'" min="1" max="999"/><span class="select_text">人次</span><span onclick="dbNumPlus('+(e.treasureInfo.totalCount-e.treasureInfo.participantCount)+');" class="z_d_plus"><i class="d_plus"></i></span></div><div class="col-33 pull-right"><button onclick="dbBuyButton('+e.treasureInfo.fewestCount+","+(e.treasureInfo.totalCount-e.treasureInfo.participantCount)+","+e.treasureInfo.treasureId+');" class="button global_button d_button">立即夺宝</button></div></div></div></div></div>'):1!=e.isShow?($(".content").addClass("z-havelottery-bar-height"),$("#p-duobao").append('<div class="z-havelottery-bar z_db_box bar bar-footer"><div class="card"><div class="card-footer"><span>商品已下架……</span></div></div></div>')):($(".content").addClass("z-havelottery-bar-height"),$("#p-duobao").append('<div class="z-havelottery-bar z_db_box bar bar-footer"><div class="card"><div class="card-footer"><span>新一期正在火热进行中……</span><span onclick="linkToNewDuobao('+e.treasureInfo.treasureId+');" class="btn">立即前往</span></div></div></div>'))}function linkToNewDuobao(e){$.router.load("duobao.html?treasureId="+e+"&type=2")}function dbNumMinus(){var e=$(".d_ipt_num").val()?$(".d_ipt_num").val():2;1!=e&&$(".d_ipt_num").val(e-1)}function dbNumPlus(e){var t=$(".d_ipt_num").val()?parseInt($(".d_ipt_num").val()):0;t!=e&&$(".d_ipt_num").val(t+1)}function dbBuyButton(e,t,a){if(navigator.userAgent.indexOf("QQ")>-1||navigator.userAgent.indexOf("MicroMessenger")>-1)return $.popup('<div class="popup wxqq"><div class="u-arrow"></div><div class="u-alert"><div class="alert-text">点击右上角按钮<br />选择“'+browserText()+"”<br />前往购买</div></div></div>"),void $(".wxqq").click(function(){$.closeModal(".wxqq")});if(!lData.userId)return void $.router.load("login.html");$.showIndicator();var o=$(".d_ipt_num").val();o?o<e?$.alert("请输入正确的购买人次"):o>t?$.alert("剩余人次不足，请重新输入"):dbSaveOrder(o,a):$.alert("请输入购买人次"),setTimeout(function(){$.hideIndicator()},100)}function browserText(){return $.device.ios?"在Safari中打开":"在浏览器中打开"}function dbSaveOrder(e,t){$.ajax({type:"post",url:lData.getUrl+"saveOrder",data:{v:lData.srvVersion,content:encryptByDES(JSON.stringify({treasureId:t,userKey:window.localStorage.getItem("userKey"),buyCount:e,channelId:lData.channel}))},async:!0,dataType:"json",success:function(e){0==e.stateCode?(window.sessionStorage.setItem("orderInfo",JSON.stringify(e.order)),e.useHongbao?window.sessionStorage.setItem("canUseBonus",JSON.stringify(e.useHongbao)):window.sessionStorage.removeItem("canUseBonus"),$.showIndicator(),setTimeout(function(){$.router.load("pay.html")},200)):$.alert(e.message)}})}function fillLuckyNum(e){$("#db-goods-info").append('<div class="my-lucky-number"><p>您已参与了：<span class="a8">'+e.length+'</span> 人次</p><div class="a-my-lucky-num clearfix"><span>夺宝号码：</span></div></div>'),e.length<=9?$.each(e,function(e,t){$(".a-my-lucky-num").append("<span>"+t+"</span>")}):($.each(e,function(e,t){e<=7&&$(".a-my-lucky-num").append("<span>"+t+"</span>")}),$(".a-my-lucky-num").append('<span id="j-db-showAllLuckNum" style="color:#0684f3;">查看全部</span>'),$("#j-db-showAllLuckNum").click(function(){showAllLuckNum(e)}))}function showAllLuckNum(e){var t='<div class="popup popup-luckycode close-popup"><p class="text-center" style="margin-top:.6rem;margin-bottom:.3rem;color:#5d5d5d;">幸运码</p><div style="height:7.2rem;overflow:auto;"><ul class="a-db-luckyNum-box row no-gutter list-block z_lucky_code text-center" style="list-style:none;margin:0;padding:0;color:#b0b0b0;"></ul></div></div>';$.popup(t),$.each(e,function(e,t){$("<li></li>",{class:"col-25",text:t}).appendTo(".a-db-luckyNum-box")}),$(".popup-overlay").click(function(){$.closeModal(".popup")})}function dbDetailLink(e,t){$.showIndicator(),$.router.load("goods-detail.html?imgurl="+e+"&goodstype="+t)}function dbPartnerLink(e,t){return 0==t?void $.alert("本期暂无参与者"):($.showIndicator(),void $.router.load("partner.html?treasureId="+e))}function dbWinRecordLink(e){$.showIndicator(),$.router.load("win-record.html?treasureId="+e)}function duobaoRefresh(){window.sessionStorage.setItem("duobaoForceRefresh",1);var e=$.getUrlParam("treasureId"),t=$.getUrlParam("type");t||(t=1),getDetail(e,t)}$(function(){window.sessionStorage.getItem("forceLinkToDetail")||window.sessionStorage.setItem("forceLinkToDetail",1),/幸运码/.test($(".popup").html())&&$.closeModal(".popup"),$("#p-duobao .duobao-back").on("click",function(){sessionStorage.getItem("sm.router.maxStateId")<=1?$.router.load("index.html"):$.router.back()}),window.pageVisible=0,window.sessionStorage.getItem("paying")&&window.sessionStorage.removeItem("paying");try{var e=$.getUrlParam("treasureId"),t=1;2==$.getUrlParam("type")&&(t=2),getDetail(e,t),dropRefresh("#p-duobao",duobaoRefresh),setTimeout(function(){$.hideIndicator()},500)}catch(e){}});var CutDownTimer;