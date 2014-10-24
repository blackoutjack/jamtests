function runTest() {
  introspect(JAM.policy.pFull) {
  var i = 0;
  for (;;) {
    var v0 = i > 5;
    if (v0) {
      break;
    }
    i = i + 1;
  }

  }

  return "RESULT NOT SPECIFIED";
}
