function winGetData(e,n,a){$.ajax({type:"get",url:lData.getUrl+"getPreviousLuckyUserList",data:{treasureId:e,currentPage:n,v:lData.srvVersion},async:!0,dataType:"json",success:function(e){return null!=e.participantInfoList&&0==e.participantInfoList.length&&0==e.totalPage?void $("#p-partner").find(".content").append('<div class="z_p_loadmore pull-load-more">暂无数据</div>'):null==e.participantInfoList?void $("#p-win-record").find(".z_p_loadmore").html("没有更多数据"):(winRecordTotlePage=e.totalPage,winRecordFillData(e),0==$(".z_p_loadmore").length&&$("#p-win-record").find(".content").append('<div class="z_p_loadmore pull-load-more">加载更多&darr;</div>'),1==e.totalPage&&$(".z_p_loadmore").remove(),a&&a(),void setTimeout(function(){$.hideIndicator()},500))}})}function winRecordFillData(e){$.each(e.participantInfoList,function(e,n){$("#win-record-content-box").append('<div class="card partner_model"><div class="card-header"><div>期号:<span class="z_pa_period">'+n.treasureInfo.phaseNumber+'</span><span class="z_lp_time_text"> （揭晓时间 </span><span class="z_pa_time">'+n.treasureInfo.lotteryTime+'</span>）</div></div><div class="card-header" onclick="winRecordLinkPartner(\''+n.treasureInfo.treasureId+'\')"><div class="partner-info-left"><div><span>幸运得主</span><span class="z_pa_name">'+n.userInfo.nickName+"</span></div><div>"+function(e){return e?'<span><span class="z_pa_ip_text">'+e.split("&")[0]+'</span>IP</span><span class="z_pa_ip">'+e.split("&")[1]+"</span>":'<span style="color:#b0b0b0;">旧版用户IP未获取</span>'}(n.userInfo.ip)+'</div><div><span>幸运号码</span><span class="z_pa_lucky_num">'+n.luckCode+'</span></div><div><span>本期参与</span><span class="z_pa_num">'+n.buyCount+'</span>人次</div></div><span class="icon icon-right pull-right"></span></div></div>')})}function winRecordLinkPartner(e){$.showIndicator(),$.router.load("partner.html?treasureId="+e)}function winRecordRefresh(){window.sessionStorage.setItem("winRecordForceRefresh",1);var e=$.getUrlParam("treasureId");$("#win-record-content-box").find("*").remove(),winGetData(e,1)}function partnerBottomLoadmore(){var e=(Math.ceil($("#p-win-record").find(".partner_model").length/10),!1);$(document).on("infinite","#p-win-record .infinite-scroll",function(){var n=Math.ceil($("#p-win-record").find(".partner_model").length/10);e||(e=!0,$.showIndicator(),setTimeout(function(){var a=$.getUrlParam("treasureId");return winRecordTotlePage&&n>=winRecordTotlePage?void setTimeout(function(){$.hideIndicator(),$(".z_p_loadmore").html("没有更多数据"),$.toast("没有更多数据",1e3,"toast-80"),e=!1},200):void winGetData(a,n+1,function(){setTimeout(function(){$.hideIndicator(),$.toast("加载成功",1e3,"toast-80"),e=!1},100)})},100))})}$(function(){/幸运码/.test($(".popup").html())&&$.closeModal(".popup");var e=$.getUrlParam("treasureId");try{if($(".partner_model").attr("name")==e)return;if($("#p-win-record .partner_model").length>0)return;$.showIndicator(),$("#win-record-content-box").find("*").remove(),winGetData(e,1),dropRefresh("#p-win-record",winRecordRefresh),partnerBottomLoadmore()}catch(e){}});var winRecordTotlePage;/android/i.test(navigator.userAgent);