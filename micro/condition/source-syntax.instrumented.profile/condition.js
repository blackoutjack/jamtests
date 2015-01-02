
JAM.startProfile('load');
function runTest() {
  var P = false;
  if (P) {
    introspect(JAM.policy.p1) {
      x = 2;
    }
  }

  return typeof x === "undefined";
}

JAM.stopProfile('load');
