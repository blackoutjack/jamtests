function runTest() {
  introspect(JAM.policy.pFull) {
  var b = 1;
  document.cookie++;
  a[b]++;
  a[c] = 10

  }

  return "Expect an exception";
}
