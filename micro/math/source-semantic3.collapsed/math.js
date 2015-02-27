var v0 = Math.random();
var v1 = JAM.call(Math.floor, Math, [v0]);
introspect(JAM.policy.p1) {
  x = v1
}

JAM.log("Result: " + (x !== 2));
