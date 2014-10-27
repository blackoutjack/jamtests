function runTest() {
  function f(){JAM.isEval(eval)?eval("introspect(JAM.policy.pFull) { x = 2 }"):JAM.call(eval,null,["x = 2"])}introspect(JAM.policy.p1)x=0;f()

  return x === 0;
}
