function getData(t,e,a,n){$.ajax({type:"get",url:lData.getUrl+"getCurrentPhaseParticipantList",data:{treasureId:t,currentPage:e,v:lData.srvVersion},async:!0,dataType:"json",success:function(t){if(a&&$("#partner-content-box").find("*").remove(),0==t.participantInfoList.length&&0==t.totalPage){if($(".z_p_loadmore").length>0)return;return void $("#p-partner").find(".content").append('<div class="z_p_loadmore pull-load-more">暂无数据</div>')}partnerTotlePage=t.totalPage,partnerFillData(t),0==$(".z_p_loadmore").length&&$("#p-partner").find(".content").append('<div class="z_p_loadmore pull-load-more">加载更多&darr;</div>'),1==t.totalPage&&$(".z_p_loadmore").remove(),n&&n(),partnerBottomLoadmore(t.currentPage),setTimeout(function(){$.hideIndicator()},500)}})}function partnerFillData(t){$.each(t.participantInfoList,function(t,e){$("#partner-content-box").append('<div class="card partner_model" name="'+e.treasureInfo.treasureId+'"><div class="card-header"><div style="margin-top: .2rem;width:100%;"><span class="z_pa_time_text">参与时间</span><span class="z_pa_time">'+e.partyTime+"</span></div></div><div onclick=\"pShowAllLuckNum('"+e.luckyNumber+'\')" valign="bottom" class="card-header color-white z_into_luckyCode create-popup"><div class="partner-info-left"><div><span class="z_pa_name">'+e.userInfo.nickName+'</span>参与 <span class="z_pa_num">'+e.buyCount+'</span>人次</div><div style="margin-top: .2rem;">'+function(t){return t?'<span class="z_pa_ip_text">'+t.split("&")[0]+'</span>IP <span class="z_pa_ip">'+t.split("&")[1]+"</span>":'<span style="color:#b0b0b0;">旧版用户IP未获取</span>'}(e.userInfo.ip)+'</div></div><span class="icon icon-right pull-right"></span></div></div>')})}function pShowAllLuckNum(t){var e=t.split("&"),a='<div class="popup popup-luckycode close-popup"><p class="text-center" style="margin-top:.6rem;margin-bottom:.3rem;color:#5d5d5d;">幸运码</p><div style="height:7.2rem;overflow:auto;"><ul class="a-db-luckyNum-box row no-gutter list-block z_lucky_code text-center" style="list-style:none;margin:0;padding:0;color:#b0b0b0;"></ul></div></div>';$.popup(a),$.each(e,function(t,e){$("<li></li>",{class:"col-25",text:e}).appendTo(".a-db-luckyNum-box")}),$(".popup-overlay").click(function(){$.closeModal(".popup")})}function duobaoRefresh(){$.showIndicator(),window.sessionStorage.setItem("partnerForceRefresh",1);var t=$.getUrlParam("treasureId");getData(t,1,!0)}function partnerBottomLoadmore(t){$(document).off("infinite","#p-partner .infinite-scroll");var e=!1;$(document).on("infinite","#p-partner .infinite-scroll",function(){e||(e=!0,$.showIndicator(),setTimeout(function(){var a=$.getUrlParam("treasureId");return partnerTotlePage&&t>=partnerTotlePage?void setTimeout(function(){$.hideIndicator(),$(".z_p_loadmore").html("没有更多数据"),$.toast("没有更多数据",1e3,"toast-80"),e=!1},200):void getData(a,t+1,"",function(){setTimeout(function(){$.hideIndicator(),$.toast("加载成功",1e3,"toast-80"),e=!1},100)})},100))})}$(function(){var t=$.getUrlParam("treasureId");try{if($(".partner_model").attr("name")==t)return;$.showIndicator(),getData(t,1),dropRefresh("#p-partner",duobaoRefresh)}catch(t){}});var partnerTotlePage;