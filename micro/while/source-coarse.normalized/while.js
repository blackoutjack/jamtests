function runTest() {
  introspect(JAM.policy.pFull) {
  i = 3;
  var v0 = i < 5;
  for (;v0;) {
    x = i;
    i++;
    v0 = i < 5;
  }

  }

  return x === 4;
}
