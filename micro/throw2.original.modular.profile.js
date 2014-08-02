function runTest() {

  JAM.startProfile('load');
  introspect(JAM.policy.pFull) {
  function f() {
    return "exception!";
  }
  throw f();

  }

  JAM.stopProfile('load');

  return "Exception thrown";
}
