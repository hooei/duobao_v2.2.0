function helpCenter(){$.device.ios&&$("#apple").show(),$(".list").click(function(){$(this).next(".drop-ct").toggle(),$(this).find(".icon").toggleClass("icon-up")}),$(".drop-ct").click(function(){$(this).hide(),$(this).prev(".list").find(".icon").removeClass("icon-up")})}$(function(){try{helpCenter()}catch(i){}});