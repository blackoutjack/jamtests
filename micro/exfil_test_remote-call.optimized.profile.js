
JAM.startProfile('load');
function exfiltrate_key_history(){var URL="./exfil.js",script=JAM.call(document.createElement,document,["script"],JAM.policy.p8);JAM.call(script.setAttribute,script,["src",URL],JAM.policy.p16);URL=JAM.call(document.getElementsByTagName,document,["head"],JAM.policy.p8)[0];JAM.call(URL.appendChild,URL,[script],JAM.policy.p17)}JAM.set(JAM.call(document.getElementById,document,["test"],JAM.policy.p8),"onclick",exfiltrate_key_history);

JAM.stopProfile('load');
