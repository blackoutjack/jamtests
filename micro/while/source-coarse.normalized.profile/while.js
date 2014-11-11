function runTest() {

  JAM.startProfile('load');
  introspect(JAM.policy.pFull) {
  i = 3;
  var v0 = i < 5;
  for (;v0;) {
    x = i;
    i++;
    v0 = i < 5;
  }

  }

  JAM.stopProfile('load');

  return x === 4;
}
