function getSkinParam(e){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)"),n=window.location.search.substr(1).match(t);return null!=n?decodeURIComponent(n[2]):null}function cssRepeat(){for(var e=document.getElementsByTagName("link"),t=0;t<e.length;t++)if(/common/.test(e[t].getAttribute("href")))return!0}function appendCss(e){var t=document.createElement("link");t.setAttribute("rel","stylesheet"),t.setAttribute("type","text/css");var n=(new Date).getTime();t.setAttribute("href","css/"+e+".css?rev="+n),document.getElementsByTagName("head")[0].appendChild(t)}if(getSkinParam("skin")&&window.sessionStorage.setItem("skin",getSkinParam("skin")),!cssRepeat()){var skin=getSkinParam("skin")||window.sessionStorage.getItem("skin");appendCss(skin&&("green"==skin||"red"==skin)||"blcak"==skin?"common-"+skin:"common")}