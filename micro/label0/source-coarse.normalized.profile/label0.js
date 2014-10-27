function runTest() {

  JAM.startProfile('load');
  introspect(JAM.policy.pFull) {
  x = 0;
  var i = 0;
  var v1 = i < 4;
  lbl: for (;v1;) {
    x = x + 1;
    var v0 = i == 1;
    if (v0) {
      break lbl;
    }
    i = i + 1;
    v1 = i < 4;
  }

  }

  JAM.stopProfile('load');

  return x === 1;
}
