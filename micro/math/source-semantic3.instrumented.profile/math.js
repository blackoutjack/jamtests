
JAM.startProfile('load');
var v0 = Math.random();
introspect(JAM.policy.p1) {
  x = Math.floor(v0);
}

JAM.log("Result: " + (x !== 2));

JAM.stopProfile('load');
