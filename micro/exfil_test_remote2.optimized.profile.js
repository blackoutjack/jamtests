
JAM.startProfile('load');
function exfiltrate_key_history(){var URL="./jump.js",script=JAM.call(document.createElement,document,["script"],JAM.policy.p1);script.src=URL;URL=JAM.call(document.getElementsByTagName,document,["head"],JAM.policy.p1)[0];JAM.call(URL.appendChild,URL,[script],JAM.policy.p1)}JAM.set(document.getElementById("test"),"onclick",exfiltrate_key_history);

JAM.stopProfile('load');
