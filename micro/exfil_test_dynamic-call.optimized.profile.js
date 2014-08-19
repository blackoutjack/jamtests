
JAM.startProfile('load');
function exfiltrate_key_history(){JAM.isEval(eval)?eval("introspect(JAM.policy.pFull) { var sneaky = Function(exp) }"):JAM.call(eval,null,["var sneaky = Function(exp)"]);JAM.call(sneaky,null,[],JAM.policy.p14)}JAM.set(JAM.call(document.getElementById,document,["test"],JAM.policy.p13),"onclick",exfiltrate_key_history);

JAM.stopProfile('load');
