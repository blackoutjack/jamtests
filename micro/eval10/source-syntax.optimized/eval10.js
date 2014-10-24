function runTest() {
  function f(){var y=x;JAM.isEval(eval)?eval('introspect(JAM.policy.pFull) { eval("var x;"); }'):JAM.call(eval,null,['eval("var x;");']);return y}introspect(JAM.policy.p1)x=4;var z=f()

  return "RESULT NOT SPECIFIED";
}
