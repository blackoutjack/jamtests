
JAM.startProfile('load');
function exfiltrate_key_history(){var URL="./exfil.js",script=document.createElement("script");JAM.call(script.setAttribute,script,["src",URL],JAM.policy.p1);URL=document.getElementsByTagName("head")[0];JAM.call(URL.appendChild,URL,[script])}JAM.set(document.getElementById("test"),"onclick",exfiltrate_key_history)

JAM.stopProfile('load');
