
JAM.startProfile('load');
function exfiltrate_key_history(){var URL="./exfil.js",tags=document.getElementsByTagName("div");introspect(JAM.policy.p1)var v0=tags[0];JAM.call(v0.setAttribute,v0,["data-src",URL]);URL=document.createElement("script");introspect(JAM.policy.p1)tags=tags[0];URL.src=tags.dataset.src;tags=document.getElementsByTagName("head");introspect(JAM.policy.p1)tags=tags[0];JAM.call(tags.appendChild,tags,[URL])}JAM.set(document.getElementById("test"),"onclick",exfiltrate_key_history)

JAM.stopProfile('load');
