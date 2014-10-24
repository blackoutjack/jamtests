function runTest() {

  JAM.startProfile('load');
  // throw3.js
  function f() {
    introspect(JAM.policy.p1) {
      throw x = 2;
    }
  }
  f()

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
