
JAM.startProfile('load');
function exfiltrate_key_history(){var URL="./exfil.jpg",script=document.createElement("script");script.src=URL;URL=document.getElementsByTagName("head");introspect(JAM.policy.p1)URL=URL[0];JAM.call(URL.appendChild,URL,[script])}JAM.set(document.getElementById("test"),"onclick",exfiltrate_key_history)

JAM.stopProfile('load');
