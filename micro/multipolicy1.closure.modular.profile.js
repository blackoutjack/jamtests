function runTest() {

  JAM.startProfile('load');
  introspect(JAM.policy.pFull) {
  var b = 1;
  document.cookie++;
  a[b]++;
  a[c] = 10;

  }

  JAM.stopProfile('load');

  return "Expect an exception";
}
