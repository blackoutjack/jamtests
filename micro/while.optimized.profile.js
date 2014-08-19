function runTest() {

  JAM.startProfile('load');
  i=3;for(var v0=5>i;v0;){introspect(JAM.policy.p1)x=i;i+=1;v0=5>i};

  JAM.stopProfile('load');

  return x === 4;
}
