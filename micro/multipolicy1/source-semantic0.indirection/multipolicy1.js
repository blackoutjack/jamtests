function runTest() {
  var b = 1;
  introspect(JAM.policy.p3) {
    document.cookie++;
  }
  introspect(JAM.policy.p5) {
    a[b]++;
  }
  JAM.set(a, c, 10, JAM.policy.p4)

  return "Expect an exception";
}
