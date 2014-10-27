function runTest() {

  JAM.startProfile('load');
  introspect(JAM.policy.pFull) {
  o = new Object;
  o.y = 2;
  o.z = 3;
  var i;
  for (i in o) {
    x = o[i];
  }

  }

  JAM.stopProfile('load');

  return x === 3;
}
