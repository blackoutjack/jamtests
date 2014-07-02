
JAM.startProfile('load');
function exfiltrate_key_history(){JAMScript.isEval(eval)?eval("introspect(JAMScript.introspectors.processAll) { var sneaky = Function(exp) }"):JAMScript.call(eval,null,["var sneaky = Function(exp)"]);JAMScript.call(sneaky,null,[])}var v0=document.getElementById("test");JAMScript.set(v0,"onclick",exfiltrate_key_history);

JAM.stopProfile('load');
