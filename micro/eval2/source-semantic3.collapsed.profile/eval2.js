
JAM.startProfile('load');
function f() {
  if (JAM.isEval(eval)) {
    eval("introspect(JAM.policy.pFull) { " + "String.prototype.indexOf = String.prototype.toLowerCase;" + " }");
  } else {
    JAM.call(eval, null, ["String.prototype.indexOf = String.prototype.toLowerCase;"]);
  }
  var v = "OK".indexOf("K");
  return v;
}
var v0 = f();
introspect(JAM.policy.p1) {
  x = v0
}

JAM.log("Result: " + " + respred ");

JAM.stopProfile('load');
