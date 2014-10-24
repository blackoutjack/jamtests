function runTest() {

  JAM.startProfile('load');
  introspect(JAM.policy.pFull) {
  var i = 0;
  for (;;) {
    if (i > 5) {
      break;
    }
    i++;
  }

  }

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
