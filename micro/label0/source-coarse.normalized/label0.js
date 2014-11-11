function runTest() {
  introspect(JAM.policy.pFull) {
  x = 0;
  var i = 0;
  var v1 = i < 4;
  lbl: for (;v1;) {
    x++;
    var v0 = i == 1;
    if (v0) {
      break lbl;
    }
    i++;
    v1 = i < 4;
  }

  }

  return x === 1;
}
