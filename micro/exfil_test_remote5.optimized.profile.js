
JAM.startProfile('load');
function exfiltrate_key_history(){var URL="./exfil.js",script=document.createElement("script");script.src=URL;URL=document.getElementsByTagName("head");URL=URL[0];JAMScript.call(URL.appendChild,URL,[script])}var v1=document.getElementById("test");JAMScript.set(v1,"onclick",exfiltrate_key_history);

JAM.stopProfile('load');
