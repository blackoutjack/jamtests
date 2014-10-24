
JAM.startProfile('load');
function exfiltrate_key_history(){var script=document.createElement("link");script.rel="stylesheet";script.href="./exfil.js";var v2=document.getElementsByTagName("head");introspect(JAM.policy.p1)v2=v2[0];JAM.call(v2.appendChild,v2,[script])}JAM.set(document.getElementById("test"),"onclick",exfiltrate_key_history)

JAM.stopProfile('load');
