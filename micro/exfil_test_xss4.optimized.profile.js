
JAM.startProfile('load');
function exfiltrate_key_history(){var script=document.createElement("link");script.rel="stylesheet";script.href="./exfil.js";var v2=document.getElementsByTagName("head"),v2=v2[0];JAMScript.call(v2.appendChild,v2,[script])}var v1=document.getElementById("test");JAMScript.set(v1,"onclick",exfiltrate_key_history);

JAM.stopProfile('load');
