function runTest() {

  JAM.startProfile('load');
  function f(){x=void 0;introspect(alert)introspect(JAM.policy.p6CB626AF3B00A2806871E6DD34E13FD7B9D46DB2)x=2;alert(x)}f();

  JAM.stopProfile('load');

  return "The Tx object should be alerted, followed by 'undefined'";
}
