$(function(){
	if (window.sessionStorage.getItem("paying") == null) {
		$.router.load("index.html");
		window.sessionStorage.removeItem("paying");
	}
	window.sessionStorage.removeItem("paying");
	window.sessionStorage.removeItem("orderInfo");
	$("#p-pay-fail").find(".p-backhome").click(function(){
		$.router.load("index.html");
	});
	
	window.sessionStorage.setItem("recordForceRefresh","0&1&2");
})
