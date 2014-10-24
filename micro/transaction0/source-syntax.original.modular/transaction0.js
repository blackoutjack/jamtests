function runTest() {
  introspect(JAM.policy.pFull) {
  function pol(tx) {
    tx.commit();
  }
  x = undefined;
  introspect(pol) {
    x = 2;
  }

  }

  return "RESULT NOT SPECIFIED";
}
