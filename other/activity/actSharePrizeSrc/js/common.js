var $ = (function($){
	$.FZ = function(a, b) {
		function getFZ() {
			var width = document.documentElement.clientWidth || document.body.clientWidth;
			var fontSize = (a / b) * width;
			return fontSize;
		};
		document.documentElement.style.fontSize = getFZ() + "px";
		window.onresize = function() {
			setTimeout(function() {
				document.documentElement.style.fontSize = getFZ() + "px";
			}, 100);
		};
	};
	
	
	return $;
})(jQuery)
$.FZ(20,360);

if (!/127.0.0.1/.test(window.location.href)){
	var _vds = _vds || [];
	(function(){
		_vds.push(['setAccountId', 'bdd0f83d74ae607c']);
	
		(function() {
			var vds = document.createElement('script');
			vds.type='text/javascript';
			vds.async = true;
			vds.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'dn-growing.qbox.me/vds.js';
			var s = document.getElementsByTagName('script')[0];
			s.parentNode.insertBefore(vds, s);
		})();
	})();
}



var actSharePrize = (function($){
	var init = function(){
		
	}
	
	return {
		init: init
	}
})(jQuery)
