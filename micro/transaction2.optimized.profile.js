function runTest() {

  JAM.startProfile('load');
  function f(){x=void 0;introspect(alert)introspect(JAM.policy.p1)x=2;alert(x)}f();

  JAM.stopProfile('load');

  return "The Tx object should be alerted, followed by 'undefined'";
}
