function getType(e){$(".active").removeClass("active"),$(".buttons-fixed").find("a").eq(e).addClass("active"),$(".tabs").find(".tab").eq(e).addClass("active")}function recordTabClick(){$(".j-record-tab").find("a").click(function(){window.sessionStorage.setItem("recordTab",$(this).index()),recordGetDataType($(this).index())})}function recordGetDataType(e){if(0==e);else if(1==e){var t="#not-lottery";recordGetData(0,t)}else if(2==e){var t="#have-lottery";recordGetData(1,t),dropRefresh("#have-lottery-content",record2Refresh)}}function recordGetData(e,t){null==window.sessionStorage.getItem("recordForceRefresh")&&$(t).find(".card").length>0||$.ajax({type:"post",url:lData.getUrl+"getTreasureRecordList",data:{userId:lData.userId,flag:e,v:lData.srvVersion},async:!0,dataType:"json",success:function(a){0!=a.participantInfoList.length?($(t).find(".z_not_record").show(),$(t).find(".now_participate").click(function(){$.router.load("index.html")})):($(t).find(".z_my_prize_model").remove(),$.each(a.participantInfoList,function(t,a){recordFillData(a,e)}))}})}function recordFillData(e,t){if(1==t)var a="#have-lottery-content";else if(0==t)var a="#not-lottery-content";$(a+" .cont").append('<div onclick="haveLotteryOld('+e.treasureInfo.treasureId+');" class="card z_my_prize_model"><div class="card-content"><div class="list-block media-list"><ul><li class="item-content clearfix"><div style="background:url('+e.treasureInfo.goodsInfo.icon+') center center no-repeat;background-size:contain;" class="item-media prize_image"></div><div class="item-inner clearfix"><div class="item-title-row"><div class="item-title z_prize_title">'+e.treasureInfo.goodsInfo.describe+'</div></div><div class="item-subtitle z_prize_content"><div class="record_finish_text"><span>期号：第'+e.treasureInfo.phaseNumber+'期</span></div><div class="record_finish_text">我已参与：<span class="mi-prize-havebought">'+e.buyCount+'</span>人次<span onclick="haveLotteryDetail('+e.treasureInfo.treasureId+",'"+encodeURIComponent(e.treasureInfo.goodsInfo.describe)+"',"+e.treasureInfo.phaseNumber+",'"+e.treasureInfo.lotteryTime+"',"+e.luckCode+","+e.buyCount+');" style="font-size:.7rem;margin-left:.7rem;color:#359df5;">查看详情</span></div></div></div></li></ul></div></div>'+recordFooterData(e,t)+"</div>")}function recordFooterData(e,t){return 1==t?'<div class="card-footer"><span>幸运得主：<span style="color:#359df5;">'+e.userInfo.nickName+'</span></span><span><span><span style="color:#da3651;">'+e.luckyBuyCount+'</span>人次</span><span onclick="haveLotteryNewDuobao('+e.treasureInfo.treasureId+');" class="button">再次购买</span></span></div>':0==t?'<div class="card-footer not-lottert-footer"><span class="record-schedule-box"><p class="clearfix"><span class="pull-left">总需'+e.treasureInfo.totalCount+'人次</span><span class="pull-right">剩余'+(e.treasureInfo.totalCount-e.treasureInfo.participantCount)+'人次</span></p><div class="record-schedule-outer"><p style="width:'+e.treasureInfo.participantCount/e.treasureInfo.totalCount*100+'%;" class="record-schedule-inner"></p></div></span><span><span onclick="haveLotteryNewDuobao('+e.treasureInfo.treasureId+');" class="button">追加</span></span></div>':void 0}function haveLotteryOld(e){$.router.load("duobao.html?treasureId="+e)}function haveLotteryDetail(e,t,a,r,o,n){event.stopPropagation(),$.router.load("buydetail.html?treasureId="+e+"&name="+t+"&phase="+a+"&time="+r+"&lucky="+o+"&count="+n)}function haveLotteryNewDuobao(e){event.stopPropagation(),$.router.load("duobao.html?treasureId="+e+"&type=2")}function record2Refresh(){recordGetData(1)}$(function(){if(/幸运码/.test($(".popup").html())&&$.closeModal(".popup"),null!=window.sessionStorage.getItem("recordTab"))var e=window.sessionStorage.getItem("recordTab");else var e=$.getUrlParam("type");getType(e);try{if(2==e)var t=1,a="#have-lottery-content";else if(1==e)var t=0,a="#not-lottery-content";recordGetData(t,a),recordTabClick()}catch(e){}});