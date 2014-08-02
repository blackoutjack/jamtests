function runTest() {
  function f(){var y=x;JAM.isEval(eval)?eval("introspect(JAM.policy.pFull) { var x; }"):JAM.call(eval,null,["var x;"]);return y}x=4;var z=f();

  return "RESULT NOT SPECIFIED";
}
