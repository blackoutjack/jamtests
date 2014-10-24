function runTest() {
  introspect(JAM.policy.pFull) {
  var i = 0;
  for (;;) {
    if (i > 5) {
      break;
    }
    i++;
  }

  }

  return "RESULT NOT SPECIFIED";
}
