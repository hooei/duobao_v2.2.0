function chestFillData(t){$(".chest_model").length>0&&null==window.localStorage.getItem("chestForceRefresh")||($(".chest_model").remove(),$.showIndicator(),$.ajax({type:"get",url:lData.getUrl+"getTreasureList",data:{currentPage:t,order:1,type:2,v:lData.srvVersion},async:!0,dataType:"json",success:function(e){t>e.totalPage||($.each(e.treasureInfoList,function(t,e){appendData("#p-chest .content",e)}),window.localStorage.removeItem("chestForceRefresh"),setTimeout(function(){$.hideIndicator()},500))}}))}function appendData(t,e){$(t).append('<div onclick="routerToDuobao('+e.treasureId+')" class="chest_model card"><div valign="bottom" class="card-header color-white no-border no-padding"><img class="card-cover" src='+e.goodsInfo.picUrl+' alt=""></div><div class="card-content"><div class="card-content-inner list_info"><div class="clearfix stage_info"><p class="stage_text"><span>'+e.goodsInfo.describe+'</span></p></div><div class="clearfix"><div class="schedule pull-left clearfix"><div class="schedule_bar"><div class="scheduling" style="width:'+e.participantCount/e.totalCount*100+'%;"></div></div><div class="pull-left"><p class="schedule_percent">'+e.totalCount+'</p><p>总需</p></div><div class="schedule_text2 pull-right"><p class="schedule_person">'+(e.totalCount-e.participantCount)+'</p><p>剩余</p></div></div><button class="global_button participate button pull-right">立即夺宝</button></div></div></div></div>')}function chestRefresh(){$(".chest_model").remove(),chestFillData(1)}function routerToDuobao(t){$.showIndicator(),$.router.load("duobao.html?treasureId="+t)}$(function(){try{chestFillData(1),dropRefresh("#p-chest",chestRefresh)}catch(t){}});