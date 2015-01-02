
JAM.startProfile('load');
var v1 = Math.random();
var v0 = v1 * 4;
var v2 = JAM.call(Math.floor, Math, [v0]);
introspect(JAM.policy.p1) {
  x = v2
}
switch(x) {
  case 0:
    introspect(JAM.policy.p1) {
      x++;
    }
    break;
  case 1:
    introspect(JAM.policy.p1) {
      x--;
    }
    break;
  case 2:
    introspect(JAM.policy.p1) {
      x++;
    }
    break;
  case 3:
    introspect(JAM.policy.p1) {
      x--;
    }
    break;
  default:
    alert("ERROR");
}

JAM.log("Result: " + " + respred ");

JAM.stopProfile('load');
