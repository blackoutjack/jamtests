function runTest() {
  introspect(JAM.policy.pFull) {
  function transformed() {
    xxx = undefined;
    xxx = 5;
    return;
  }
  transformed();
  alert(xxx)

  }

  return "RESULT NOT SPECIFIED";
}
