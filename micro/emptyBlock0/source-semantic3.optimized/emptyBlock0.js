function runTest() {
  function f(){if("undefined"!==typeof x)introspect(JAM.policy.p1)x=2}f()

  return typeof x === "undefined";
}
