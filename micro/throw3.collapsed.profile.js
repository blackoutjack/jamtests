function runTest() {

  JAM.startProfile('load');
  function f() {
    introspect(JAM.policy.p6CB626AF3B00A2806871E6DD34E13FD7B9D46DB2) {
      throw x = 2;
    }
  }
  f();

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
