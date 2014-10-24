function runTest() {
  introspect(JAM.policy.pFull) {
  function f() {
    if (typeof x === "undefined") {
    } else {
      x = 2;
    }
  }
  f()

  }

  return "RESULT NOT SPECIFIED";
}
