function runTest() {
  introspect(JAM.policy.pFull) {
  alert("0");
  introspect(p) {
    alert("1");
  }

  }

  return "RESULT NOT SPECIFIED";
}
