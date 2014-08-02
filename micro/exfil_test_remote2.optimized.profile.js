
JAM.startProfile('load');
function exfiltrate_key_history(){var URL="./jump.js",script=JAM.call(document.createElement,document,["script"],JAM.policy.pC6BD08F4643AFC435CEA3BC1F2234D4283B1AEE1);script.src=URL;URL=JAM.call(document.getElementsByTagName,document,["head"],JAM.policy.pC6BD08F4643AFC435CEA3BC1F2234D4283B1AEE1)[0];JAM.call(URL.appendChild,URL,[script],JAM.policy.pC6BD08F4643AFC435CEA3BC1F2234D4283B1AEE1)}JAM.set(document.getElementById("test"),"onclick",exfiltrate_key_history);

JAM.stopProfile('load');
