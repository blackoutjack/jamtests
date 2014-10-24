function runTest() {
  introspect(JAM.policy.pFull) {
  eval("var xxx = 5;");
  alert(xxx)

  }

  return "RESULT NOT SPECIFIED";
}
