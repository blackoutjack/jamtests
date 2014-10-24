
JAM.startProfile('load');
function exfiltrate_key_history(){var URL="./exfil.js",tags=document.getElementsByTagName("div"),v0=tags[0];JAM.call(v0.setAttribute,v0,["data-src",URL],JAM.policy.p1);URL=document.createElement("script");JAM.call(URL.setAttribute,URL,["src",tags[0].getAttribute("data-src")],JAM.policy.p1);tags=document.getElementsByTagName("head")[0];JAM.call(tags.appendChild,tags,[URL])}JAM.set(document.getElementById("test"),"onclick",exfiltrate_key_history)

JAM.stopProfile('load');
