function calc(c,a){var t=luanmingli.calcTestUrl;2==a?$("#calc-iframe").attr("src","http://www.2333db.com/calc-second/index.html?treasureId="+c+t):$("#calc-iframe").attr("src","http://www.2333db.com/calc/index.html?treasureId="+c+t)}$(function(){try{var c=$.getUrlParam("treasureId"),a=$.getUrlParam("goodtype");calc(c,a)}catch(c){}});