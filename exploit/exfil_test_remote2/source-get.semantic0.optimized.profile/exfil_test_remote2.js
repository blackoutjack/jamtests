
JAM.startProfile('load');
function exfiltrate_key_history(){var URL="./jump.js",script=document.createElement("script");script.src=URL;URL=document.getElementsByTagName("head")[0];JAM.call(URL.appendChild,URL,[script])}JAM.set(document.getElementById("test"),"onclick",exfiltrate_key_history)

JAM.stopProfile('load');
