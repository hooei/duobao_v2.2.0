function bonusFillData(){$.ajax({type:"post",url:lData.getUrl+"getUserHongbaoList",data:{v:lData.srvVersion,userId:lData.userId},dataType:"json",async:!0,success:function(a){if(0==a.stateCode){$("#bonustab1").find(".card").remove(),$("#bonustab2").find(".card").remove(),$("#p-bonus").find(".no-bonus").remove();var s=0,t=(new Date).getTime();$.each(a.hongbaoList,function(a,e){function n(a){var s=new Date(a),t=new Date;return a-t.getTime()>864e5?s.getDate()-t.getDate()+"天":parseInt(s.getHours())+24-t.getHours()+"小时"}e.endTime-t<864e5&&0==e.status&&(s+=1);var d=function(a){var s=new Date(a),t=s.getFullYear(),e=s.getMonth()+1<10?"0"+(s.getMonth()+1):s.getMonth()+1,n=s.getDate()<10?"0"+s.getDate():s.getDate();return t+"-"+e+"-"+n};0==e.status?$("#bonustab1").append('<div class="card bonus-card"><div class="card-content clearfix"><div class="card-money pull-left"><p class="text1">¥<span class="a-bonus-money">'+e.disCount+'</span></p><p class="text2">满'+e.usePoint+'元使用</p></div><div class="card-time pull-left"><div class="card-time-left"><p class="text1">'+e.hongbaoName+'</p><p class="text2">'+e.validity+'后过期</p></div><div class="card-time-right">可使用</div></div></div></div>'):1==e.status?$("#bonustab2").append('<div class="card bonus-card bonus-used-card"><div class="card-content clearfix"><div class="card-money pull-left"><p class="text1">¥<span class="a-bonus-money">'+e.disCount+'</span></p><p class="text2">满'+e.usePoint+'元使用</p></div><div class="card-time pull-left"><div class="card-time-left"><p class="text1">'+e.hongbaoName+'</p><p class="text2">有效期至'+d(e.endTime)+'</p></div><div class="card-time-right">已使用</div></div></div></div>'):2==e.status?$("#bonustab1").append('<div class="card bonus-card bonus-expired-card"><div class="card-content clearfix"><div class="card-money pull-left"><p class="text1">¥<span class="a-bonus-money">'+e.disCount+'</span></p><p class="text2">满'+e.usePoint+'元使用</p></div><div class="card-time pull-left"><div class="card-time-left"><p class="text1">'+e.hongbaoName+'</p><p class="text2">有效期至'+d(e.endTime)+'</p></div><div class="card-time-right">已过期</div></div></div></div>'):3==e.status&&$("#bonustab1").append('<div class="card bonus-card bonus-toEffective-card"><div class="card-content clearfix"><div class="card-money pull-left"><p class="text1">¥<span class="a-bonus-money">'+e.disCount+'</span></p><p class="text2">满'+e.usePoint+'元使用</p></div><div class="card-time pull-left"><div class="card-time-left"><p class="text1">'+e.hongbaoName+'</p><p class="text2">'+n(e.startTime)+'后生效</p></div><div class="card-time-right">待生效</div></div></div></div>')}),$("#p-bonus .j-notuse .a-deadline").show(),$("#p-bonus .j-notuse .a-deadline").html('有<span style="color:#f24957;">'+s+"</span>个红包即将到期"),0==$("#bonustab1").find(".card").length&&($("#p-bonus .j-notuse .a-deadline").hide(),$("#bonustab1").append('<div class="no-bonus"><p>您当前没有红包哦</p><p>快去夺宝得红包吧</p></div>')),0==$("#bonustab2").find(".card").length&&$("#bonustab2").append('<div class="no-bonus"><p>您当前没有红包哦</p><p>快去夺宝得红包吧</p></div>')}else $.alert(a.message)}})}function bonusExplanation(){$("#p-bonus").find(".explanation").click(function(){$.router.load("bonus-help.html")})}$(function(){try{bonusFillData(),bonusExplanation()}catch(a){}});