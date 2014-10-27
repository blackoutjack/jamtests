function runTest() {

  JAM.startProfile('load');
  var v0=Math.random();introspect(JAM.policy.p2)x=3*v0;introspect(JAM.policy.p2)x=4;var v1=Math.random();introspect(JAM.policy.p2)x=3*v1;introspect(JAM.policy.p2)x=5;var v2=Math.random();introspect(JAM.policy.p2)x=3*v2;introspect(JAM.policy.p2)x=6

  JAM.stopProfile('load');

  return x === 6;
}
