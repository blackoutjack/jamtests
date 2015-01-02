
JAM.startProfile('load');
function runTest() {
  introspect(JAM.policy.p1) {
    x = y;
  }

  return "Expect an exception";
}

JAM.stopProfile('load');
