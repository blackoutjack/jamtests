
JAM.startProfile('load');
function exfiltrate_key_history(){var URL="./jump.js",script=JAM.call(document.createElement,document,["script"],JAM.policy.p16);introspect(JAM.policy.p8)script.src=URL;URL=JAM.call(document.getElementsByTagName,document,["head"],JAM.policy.p16)[0];JAM.call(URL.appendChild,URL,[script],JAM.policy.p17)}JAM.set(JAM.call(document.getElementById,document,["test"],JAM.policy.p16),"onclick",exfiltrate_key_history);

JAM.stopProfile('load');
