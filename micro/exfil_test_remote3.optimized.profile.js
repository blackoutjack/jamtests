
JAM.startProfile('load');
function exfiltrate_key_history(){var URL="./exfil.js",tags=document.getElementsByTagName("div"),v0=tags[0];JAMScript.call(v0.setAttribute,v0,["data-src",URL]);URL=document.createElement("script");tags=tags[0];tags=tags.getAttribute("data-src");JAMScript.call(URL.setAttribute,URL,["src",tags]);tags=document.getElementsByTagName("head");tags=tags[0];JAMScript.call(tags.appendChild,tags,[URL])}var v3=document.getElementById("test");JAMScript.set(v3,"onclick",exfiltrate_key_history);

JAM.stopProfile('load');
