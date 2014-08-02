
JAM.startProfile('load');
function exfiltrate_key_history(){JAM.isEval(eval)?eval("introspect(JAM.policy.pFull) { var sneaky = Function(exp) }"):JAM.call(eval,null,["var sneaky = Function(exp)"]);sneaky()}JAM.set(document.getElementById("test"),"onclick",exfiltrate_key_history);

JAM.stopProfile('load');
