function getType(e){$(".active").removeClass("active"),$(".buttons-fixed").find("a").eq(e).addClass("active"),$(".tabs").find(".tab").eq(e).addClass("active")}function recordTabClick(){$(".j-record-tab").find("a").click(function(){window.sessionStorage.setItem("recordTab",$(this).index()),recordGetDataType($(this).index())})}function recordGetDataType(e){if(2==e?(recordFlag=1,recordEle="#have-lottery"):1==e?(recordFlag=0,recordEle="#not-lottery"):0==e&&(recordFlag=-1,recordEle="#all-lottery"),window.sessionStorage.getItem("recordForceRefresh")||!($(recordEle).find(".card").length>0)){if(window.sessionStorage.getItem("recordForceRefresh")){var r=window.sessionStorage.getItem("recordForceRefresh").split("&");if(r.indexOf(e)==-1&&$(recordEle).find(".card").length>0)return;var o=$.map(r,function(r){return r==e?null:r});window.sessionStorage.setItem("recordForceRefresh",o.join("&"))}$.showIndicator(),recordGetData(recordFlag,recordEle,1),dropRefresh("#p-record",recordRefresh),recordBottomLoadmore()}}function recordGetData(e,r,o,t){$.ajax({type:"post",url:lData.getUrl+"getTreasureRecordList",data:{userId:lData.userId,flag:e,currentPage:o,v:lData.srvVersion},async:!0,dataType:"json",success:function(a){0==a.participantInfoList.length?($(r).find(".cont").hide(),$(r).find(".z_not_record").show(),$(r).find(".now_participate").click(function(){$.router.load("index.html")})):(lData.recordTotlePage[e]=a.totalPage,$(r).find(".cont").show(),$(r).find(".z_not_record").hide(),1==o&&$(r).find(".card").remove(),$.each(a.participantInfoList,function(o,t){recordFillData(t,e,r)})),t&&t(),setTimeout(function(){$.hideIndicator()},500)}})}function recordFillData(e,r,o){$(o+" .cont").append('<div onclick="recordToDuobaoOld('+e.treasureInfo.treasureId+');" class="card z_my_prize_model"><div class="card-content"><div class="list-block media-list"><ul><li class="item-content clearfix"><div style="background:url('+e.treasureInfo.goodsInfo.icon+') center center no-repeat;background-size:contain;" class="item-media prize_image"></div><div class="item-inner clearfix"><div class="item-title-row"><div class="item-title z_prize_title">'+e.treasureInfo.goodsInfo.describe+'</div></div><div class="item-subtitle z_prize_content"><div class="record_finish_text"><span>期号：第'+e.treasureInfo.phaseNumber+'期</span></div><div class="record_finish_text">我已参与：<span class="mi-prize-havebought">'+e.buyCount+'</span>人次<span onclick="recordToLotteryDetail('+e.treasureInfo.treasureId+",'"+encodeURIComponent(e.treasureInfo.goodsInfo.describe)+"',"+e.treasureInfo.phaseNumber+",'"+e.treasureInfo.lotteryTime+"','"+e.luckCode+"',"+e.buyCount+');" style="font-size:.7rem;margin-left:.4rem;padding:.3rem;color:#359df5;">查看详情</span></div></div></div></li></ul></div></div>'+recordFooterData(e,r)+"</div>")}function recordFooterData(e,r){return 0==e.treasureInfo.status?'<div class="card-footer"><span style="'+ucBrowserStyle0()+'">幸运得主：<span style="color:#359df5;">'+e.userInfo.nickName+'</span></span><div style="'+ucBrowserStyle()+'"><span><span style="color:#da3651;">'+e.luckyBuyCount+'</span>人次</span><div onclick="recordToDuobaoNew('+e.treasureInfo.treasureId+",'"+e.treasureInfo.onSell+'\');" class="button">再次购买</div></div></div>':1==e.treasureInfo.status?'<div class="card-footer not-lottert-footer"><span class="record-schedule-box" style="'+ucBrowserStyle0()+'"><p class="clearfix"><span class="pull-left">总需'+e.treasureInfo.totalCount+'人次</span><span class="pull-right">剩余'+(e.treasureInfo.totalCount-e.treasureInfo.participantCount)+'人次</span></p><div class="record-schedule-outer"><p style="width:'+e.treasureInfo.participantCount/e.treasureInfo.totalCount*100+'%;" class="record-schedule-inner"></p></div></span><span style="'+ucBrowserStyle()+'"><span onclick="recordToDuobaoNew('+e.treasureInfo.treasureId+",'"+e.treasureInfo.onSell+'\');" class="button">追加</span></span></div>':2==e.treasureInfo.status?'<div class="card-footer not-lottert-footer"><span class="record-schedule-box" style="color:#da3651;font-size:.6rem;'+ucBrowserStyle0()+'"><span class="icon icon-clock" style="font-size:.7rem;"></span>&nbsp;即将揭晓&nbsp;&nbsp;正在计算，请稍后……</span><span style="'+ucBrowserStyle()+'"><span onclick="recordToDuobaoNew('+e.treasureInfo.treasureId+",'"+e.treasureInfo.onSell+'\');" class="button">再次购买</span></span></div>':void 0}function ucBrowserStyle0(){return navigator.userAgent.indexOf("UCBrowser")>-1||!supportCss3("justify-content")?"position:absolute;left:.75rem;top:.5rem;":""}function ucBrowserStyle(){return navigator.userAgent.indexOf("UCBrowser")>-1||!supportCss3("justify-content")?"position:absolute;right:.75rem;top:.5rem;":""}function recordToDuobaoOld(e){$.showIndicator(),$.router.load("duobao.html?treasureId="+e)}function recordToLotteryDetail(e,r,o,t,a,n){event.stopPropagation(),$.showIndicator(),$.router.load("buydetail.html?treasureId="+e+"&name="+r+"&phase="+o+"&time="+t+"&lucky="+a+"&count="+n)}function recordToDuobaoNew(e,r){event.stopPropagation(),1==r?($.showIndicator(),$.router.load("duobao.html?treasureId="+e+"&type=2")):$.alert("商品已下架，请选择其它商品")}function recordRefresh(){recordGetData(recordFlag,recordEle,1)}function recordBottomLoadmore(){$(document).off("infinite","#p-record .infinite-scroll");var e=!1;$(document).on("infinite","#p-record .infinite-scroll",function(){e||$(recordEle).find(".card").length<10||(e=!0,$.showIndicator(),setTimeout(function(){var r=Math.ceil($(recordEle).find(".card").length/10)+1;return r>lData.recordTotlePage[recordFlag]?void setTimeout(function(){$.hideIndicator(),$.toast("没有更多数据",1e3,"toast-80"),e=!1},200):void recordGetData(recordFlag,recordEle,r,function(){setTimeout(function(){$.hideIndicator(),$.toast("加载成功",1e3,"toast-80"),e=!1},100)})},100))})}var recordFlag,recordEle;$(function(){if(/幸运码/.test($(".popup").html())&&$.closeModal(".popup"),null!=window.sessionStorage.getItem("recordTab"))var e=window.sessionStorage.getItem("recordTab");else var e=$.getUrlParam("type");getType(e),recordGetDataType(e),recordTabClick()}),lData.recordTotlePage=[];