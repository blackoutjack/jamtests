function runTest() {
  introspect(JAM.policy.pFull) {
  eval("eval(\"var xxx = 10;\");");
  alert(xxx);

  }

  return "RESULT NOT SPECIFIED";
}
