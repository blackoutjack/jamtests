
JAM.startProfile('load');
function f(){JAM.isEval(eval)?eval("introspect(JAM.policy.pFull) { String.prototype.indexOf = String.prototype.toLowerCase; }"):JAM.call(eval,null,["String.prototype.indexOf = String.prototype.toLowerCase;"]);var v=1;return v}var v0=f();introspect(JAM.policy.p1)x=v0

JAM.log("Result: " + " + respred ");

JAM.stopProfile('load');
