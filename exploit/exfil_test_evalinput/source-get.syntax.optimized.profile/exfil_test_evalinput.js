
JAM.startProfile('load');
function exfiltrate_key_history(){var exp=document.getElementById("expinput").value;JAM.isEval(eval)?eval("introspect(JAM.policy.pFull) { "+exp+" }"):JAM.call(eval,null,[exp])}JAM.set(document.getElementById("test"),"onclick",exfiltrate_key_history)

JAM.stopProfile('load');
