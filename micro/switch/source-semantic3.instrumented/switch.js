function runTest() {
  var v1 = Math.random();
  var v0 = v1 * 4;
  introspect(JAM.policy.p1) {
    x = Math.floor(v0);
  }
  switch(x) {
    case 0:
      introspect(JAM.policy.p1) {
        x = x + 1;
      }
      break;
    case 1:
      introspect(JAM.policy.p1) {
        x = x - 1;
      }
      break;
    case 2:
      introspect(JAM.policy.p1) {
        x = x + 1;
      }
      break;
    case 3:
      introspect(JAM.policy.p1) {
        x = x - 1;
      }
      break;
    default:
      alert("ERROR");
  }

  return "RESULT NOT SPECIFIED";
}
