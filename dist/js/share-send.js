function imageShow(){0==$(".showstatus-not").length&&0==$(".showstatus-ing").length&&($(".a-share-send-goodsinfo").html($.getUrlParam("goodsinfo")),$(".img-wrap").append('<input id="image-ipt" onchange="readAsDataURL();" type="file" multiple capture="camera" style="display:block;opacity:0;height:0;" /><div class="showstatus-not clearfix"><label for="image-ipt" ><img src="img/addpicture.png" /></label><p>快来晒出你收到的包裹和奖品吧～</p></div>')),setTimeout(function(){$.hideIndicator()},500)}function readAsDataURL(){var e=[];$.each($("#image-ipt")[0].files,function(t,a){e.push(a)}),0!=e&&(0==$(".showstatus-ing").length&&$(".img-wrap").append('<div class="showstatus-ing clearfix"></div>'),$.each(e,function(t,a){if(!/image\/\w+/.test(a.type))return void $.alert("请选择正确的图片格式");var i=new FileReader;i.readAsDataURL(a),i.onload=function(a){$(".showstatus-not").remove(),imageArr.indexOf(a.target.result)>-1?$.alert("请勿重复选择图片"):3==imageArr.length?$.alert("最多选择三张图片"):compression(a.target.result,400,function(a){imageArr.push(a),t+1==e.length&&insertImg(imageArr)})}}))}function compression(e,t,a){var i=document.createElement("canvas"),r=new Image;r.onload=function(){var n=4e4,o=n/.75,s=r.width,g=r.height,l=t,d=t/s*g;r.width=l,r.height=d,i.width=l,i.height=d;var h=i.getContext("2d");h.clearRect(0,0,l,d),s>g?(i.width=d,i.height=l,h.translate(d/2,l/2),h.rotate(90*Math.PI/180),h.translate(-l/2,-d/2),h.drawImage(r,0,0,l,d)):h.drawImage(r,0,0,l,d),h.restore();var c="image/png",m=i.toDataURL(c);if(m.length>=o&&t>100){var u=Math.floor(Math.sqrt(t*t*o/m.length));return void compression(e,u,a)}a(m)},r.src=e}function insertImg(e){return 0==e.length?($(".showstatus-ing").remove(),void(0==$(".showstatus-not").length&&$(".img-wrap").append('<div class="showstatus-not clearfix"><label for="image-ipt" ><img src="img/addpicture.png" /></label><p>快来晒出你收到的包裹和奖品吧～</p></div>'))):($(".showstatus-ing").find(".checking-img").remove(),$.each(e,function(e,t){$(".showstatus-ing").append('<div class="checking-img"><div style="width:5.5rem;height:5.5rem;background:url('+t+') center center no-repeat;background-size:cover;"></div><i onclick="deleteImg(this);" class="delete-icon"></i></div>')}),e.length<3&&$.each(new Array(3-e.length),function(e,t){$(".showstatus-ing").append('<label class="checking-img" for="image-ipt"><img src="img/addpicture.png" /><label>')}),void($("#image-ipt")[0].outerHTML=$("#image-ipt")[0].outerHTML))}function deleteImg(e){imageArr.splice($(e).parent().index(),1),insertImg(imageArr)}function imageRelease(){$(".release-btn").on("click",function(){if(!upLoadFlag){if(0==imageArr.length)return void $.alert("请选择图片");if($("#textArea").val().length<10)return void $.alert("不能少于10个字");if($("#textArea").val().length>textLengthLimit)return void $.alert("不能超过"+textLengthLimit+"个字");var e=/^[\u4E00-\u9FA5\w\d\,\.\/\?\<\>\;\:\'\"\\\|\[\]\{\}\=\+\-\_\)\(\*\&\^\%\$\#\@\!\，\。\／\《\》\？\；\‘\：\“\、\｜\［\］\｛\｝\＝\＋\－\—\）\（\＊\&\…\％\¥\＃\@\！\｀\～\`\~]+$/;if(!e.test($("#textArea").val())){var t=$("#textArea").val().split(""),a=[];$.each(t,function(t,i){e.test(i)||$.inArray(i,a)==-1&&a.push(i)});var i=a.join(",");return void $.alert("非法字符："+i+"<br />请重新输入")}upLoadImageToOwn()}})}function upLoadImageToOwn(){upLoadFlag=!0,$.showPreloader("上传中");var e=luanmingli.getUrl+"addShareOrder",t=new FormData;t.append("userId",luanmingli.userId),t.append("treasureId",$.getUrlParam("treasureId")),t.append("shareContent",$("#textArea").val()),t.append("v",luanmingli.srvVersion),$.each(imageArr,function(e,a){t.append("image"+(e+1),a)});var a=new XMLHttpRequest;a.open("post",e,!0),a.onreadystatechange=function(){if(4==a.readyState){setTimeout(function(){$.hidePreloader()},400);var e=a.status;if(e>=200&&e<300){var t=$.parseJSON(a.response);0==t.stateCode?(window.sessionStorage.setItem("myshareForceRefresh",1),window.sessionStorage.setItem("prizeForceRefresh",1),window.sessionStorage.removeItem("shareFailed"),$.alert("晒单成功",function(){upLoadFlag=!1,window.history.go(-3)})):$.alert(t.message,function(){window.sessionStorage.setItem("shareFailed",$("#textArea").val()),window.location.reload(!0)})}else $.alert("上传失败，请刷新重试",function(){window.sessionStorage.setItem("shareFailed",$("#textArea").val()),window.location.reload(!0)})}},a.send(t)}function textArea(){window.sessionStorage.getItem("shareFailed")&&$("#textArea").val(window.sessionStorage.getItem("shareFailed")),$("#textArea").on("keyup",function(){var e=$("#textArea").val();e.length>textLengthLimit?(0==$(".text-over").length&&$(".img-wrap").append('<span class="text-over"></span>'),$(".text-over").html(textLengthLimit-e.length)):$(".text-over").remove()})}$(function(){try{$.showIndicator(),imageShow(),imageRelease(),textArea()}catch(e){}});var textLengthLimit=80,imageArr=[],upLoadFlag;