// eval11.js
function f() {
  var y$$30 = x;
  if (JAM.isEval(eval)) {
    eval("introspect(JAM.policy.pFull) { " + "var z;" + " }");
  } else {
    JAM.call(eval, null, ["var z;"]);
  }
  return y$$30;
}
if (JAM.isEval(eval)) {
  eval("introspect(JAM.policy.pFull) { " + "var x = 4;" + " }");
} else {
  JAM.call(eval, null, ["var x = 4;"]);
}
z = f();
alert(z)