
JAM.startProfile('load');
function runTest() {
  function f() {
    var y$$30 = x;
    if (JAM.isEval(eval)) {
      eval("introspect(JAM.policy.pFull) { " + "var x;" + " }");
    } else {
      JAM.call(eval, null, ["var x;"]);
    }
    return y$$30;
  }
  introspect(JAM.policy.p1) {
    x = 4;
  }
  var z = f()

  return "RESULT NOT SPECIFIED";
}

JAM.stopProfile('load');
