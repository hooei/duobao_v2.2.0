function prizeGetData(e,t){$.showIndicator(),$.ajax({type:"post",url:lData.getUrl+"getMyPrize",data:{userId:lData.userId,currentPage:e,v:lData.srvVersion},async:!0,dataType:"json",success:function(e){0==e.stateCode?(0==e.prizeList.length&&1==e.currentPage?noPrize():($("#p-prize").find(".z_not_record").length>0&&$("#p-prize").find(".z_not_record").remove(),lData.prizeTotlePage=e.totalPage,window.sessionStorage.setItem("prize"+e.currentPage,JSON.stringify(e)),havePrize(e)),window.sessionStorage.removeItem("prizeForceRefresh"),t&&t(),setTimeout(function(){$.hideIndicator()},500)):$.alert(e.message)}})}function noPrize(){$("#p-prize").find(".z_not_record").length>0||$("#p-prize").find(".content").append('<div class="content-block z_not_record"><div class="no_record">您还没有获奖记录哦</div><button onclick="prizeBackhome();" class="global_button button now_participate">立即夺宝</button></div>')}function prizeBackhome(){$.router.load("index.html")}function havePrize(e){$.each(e.prizeList,function(e,t){$("#p-prize").find(".content").append('<div onclick="prizeToDuobaoOld('+t.treasureId+');" class="card z_my_prize_model"><div class="card-content"><div class="list-block media-list"><ul><li class="item-content clearfix"><div class="item-media prize_image" style="background-image:url('+t.icon+');"></div><div class="item-inner clearfix"><div class="item-title-row"><div class="item-title z_prize_title">'+t.description+'</div></div><div class="item-subtitle z_prize_content"><p>期号：'+t.phaseNumber+"</p><p>总需："+t.totalCount+"人次</p><p>幸运号码："+t.luckyCode+"</p><p>本期参与："+t.buyCount+'人次<span style="padding:.3rem;margin-left:.3rem;color:#359df5;" onclick="prizeToLotteryDetail('+t.treasureId+",'"+encodeURIComponent(t.description)+"',"+t.phaseNumber+",'"+t.lotteryTime+"',"+t.luckyCode+","+t.buyCount+')">查看详情</span></p><p>揭晓时间：'+t.lotteryTime+'</p></div></div></li></ul></div></div><div class="card-footer"><span></span><span><span onclick="prizeAward('+e+",this,"+t.goodstype+","+t.treasureId+');" class="btn btn1 '+hasdoneClass(t.hasdone,t.goodstype,t.shared)+'">'+hasdoneText(t.hasdone,t.goodstype,t.shared)+"</span></span></div></div>")})}function prizeToDuobaoOld(e){$.router.load("duobao.html?treasureId="+e)}function prizeToLotteryDetail(e,t,i,r,o,n){event.stopPropagation(),$.router.load("buydetail.html?treasureId="+e+"&name="+t+"&phase="+i+"&time="+r+"&lucky="+o+"&count="+n)}function hasdoneText(e,t,i){if(2==t||202==t||203==t)return"奖品详情";if(0==e)return"确认收货地址";if(2==e)return"等待商品派发";if(3==e)return"确认收货";if(1==e){if(0==i)return"晒单";if(1==i)return"已晒单";if(2==i)return"晒单金币已派发";if(3==i)return"已晒单"}}function hasdoneClass(e,t,i){return 2==e||1==e&&0!=i?"btn3":""}function prizeAward(e,t,i,r){event.stopPropagation();var o=Math.ceil($(t).parents(".z_my_prize_model").index()/10),n=$.parseJSON(window.sessionStorage.getItem("prize"+o));window.sessionStorage.setItem("prizeInfo",JSON.stringify(n.prizeList[e])),window.sessionStorage.setItem("prizeAddress",JSON.stringify(n.userAddressList)),2==i?$.router.load("award-point.html"):202==i||203==i?$.router.load("award-card.html",!0):$.router.load("award.html")}function shareButton(e,t,i,r,o){1==t&&1==o&&(event.stopPropagation(),0==i&&$.router.load("share-help.html?treasureId="+e+"&goodsinfo="+r))}function prizeShare(){event.stopPropagation(),$.alert("TODO")}function prizeRefresh(){lData.prizeNomore="",$("#p-prize").find(".z_my_prize_model").remove(),prizeGetData(1)}function prizeBottomLoadmore(){$(document).off("infinite","#p-prize .infinite-scroll");var e=!1;$(document).on("infinite","#p-prize .infinite-scroll",function(){e||lData.prizeNomore||$("#p-prize").find(".content").find(".card").length<10||(e=!0,$.showIndicator(),setTimeout(function(){var t=Math.ceil($("#p-prize").find(".content").find(".card").length/10)+1;return t>lData.prizeTotlePage?void setTimeout(function(){lData.prizeNomore=!0,$.hideIndicator(),$.toast("没有更多数据",1e3,"toast-80"),e=!1},200):void prizeGetData(t,function(){setTimeout(function(){$.hideIndicator(),$.toast("加载成功",1e3,"toast-80"),e=!1},100)})},100))})}$(function(){try{if(window.sessionStorage.removeItem("awardCardRadioCardFinish"),window.sessionStorage.removeItem("awardCardRadioGoldFinish"),window.sessionStorage.removeItem("awardCardJdFinish"),null==window.sessionStorage.getItem("prizeForceRefresh")&&$("#p-prize").find(".z_my_prize_model").length>0)return;1==window.sessionStorage.getItem("prizeForceRefresh")&&(prizeRefresh(),window.sessionStorage.removeItem("prizeForceRefresh")),prizeGetData(1),dropRefresh("#p-prize",prizeRefresh),prizeBottomLoadmore()}catch(e){}});