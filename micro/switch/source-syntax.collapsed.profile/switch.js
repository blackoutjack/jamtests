
JAM.startProfile('load');
function runTest() {
  x = JAM.call(Math.floor, Math, [Math.random() * 4]);
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

  return x !== 2;
}

JAM.stopProfile('load');
