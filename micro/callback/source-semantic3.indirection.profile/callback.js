function runTest() {

  JAM.startProfile('load');
  function f() {
    introspect(JAM.policy.p1) {
      x = 2;
    }
    return;
  }
  JAM.call(setTimeout, null, [f, 1E3])

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
