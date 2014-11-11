function runTest() {

  JAM.startProfile('load');
  introspect(JAM.policy.pFull) {
  var i = 0;
  for (;;) {
    var v0 = i > 5;
    if (v0) {
      break;
    }
    i++;
  }

  }

  JAM.stopProfile('load');

  return i === 6;
}
