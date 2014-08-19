function runTest() {
  function f(){x=void 0;introspect(alert)introspect(JAM.policy.p1)x=2;alert(x)}f();

  return "The Tx object should be alerted, followed by 'undefined'";
}
