function runTest() {
  var a=5;JAM.isEval(eval)?eval('introspect(JAM.policy.pFull) { a = "ok" }'):JAM.call(eval,null,['a = "ok"']);var b=a;

  return b === "ok";
}
