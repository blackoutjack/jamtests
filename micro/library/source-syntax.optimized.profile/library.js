function runTest() {

  JAM.startProfile('load');
  function f(){function v0(){introspect(JAM.policy.p2)x=2}this.setter=v0}function g(){function v1(){introspect(JAM.policy.p2)x=2}this.setter=v1}

  JAM.stopProfile('load');

  return "No state to inspect";
}
