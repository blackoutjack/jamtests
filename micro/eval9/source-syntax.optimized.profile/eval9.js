
JAM.startProfile('load');
function runTest() {
  function f(){var y=x;JAM.isEval(eval)?eval("introspect(JAM.policy.pFull) { var x; }"):JAM.call(eval,null,["var x;"]);return y}introspect(JAM.policy.p1)x=4;var z=f()

  return "RESULT NOT SPECIFIED";
}

JAM.stopProfile('load');
