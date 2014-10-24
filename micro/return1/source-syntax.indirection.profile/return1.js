function runTest() {

  JAM.startProfile('load');
  function g() {
    try {
      if (x) {
        return;
      } else {
        introspect(JAM.policy.p1) {
          x = 4;
        }
      }
    } finally {
      introspect(JAM.policy.p1) {
        x = 2;
      }
    }
    introspect(JAM.policy.p1) {
      x = 1;
    }
    return;
  }
  introspect(JAM.policy.p1) {
    x = 3;
  }
  g();
  print(x)

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
