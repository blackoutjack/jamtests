function runTest() {
  // return1.js
  function g() {
    try {
      if (x) {
        return;
      } else {
        x = 4;
      }
    } finally {
      introspect(JAM.policy.p1) {
        x = 2;
      }
    }
    x = 1;
    return;
  }
  x = 3;
  g();
  print(x)

  return "RESULT NOT SPECIFIED";
}
