function runTest() {

  JAM.startProfile('load');
  introspect(JAM.policy.pFull) {
  function f() {
    x = 2;
    return;
  }
  setTimeout(f, 1E3)

  }

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
