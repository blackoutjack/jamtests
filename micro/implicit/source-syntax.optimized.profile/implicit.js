function runTest() {

  JAM.startProfile('load');
  function f(){introspect(JAM.policy.p1)x=3}f();introspect(JAM.policy.p1)x=2

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
