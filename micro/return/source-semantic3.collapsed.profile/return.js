
JAM.startProfile('load');
function f() {
  introspect(JAM.policy.p2) {
    x = 2;
  }
  return;
}
f();
introspect(JAM.policy.p2) {
  x = 2;
}

JAM.log("Result: " + (typeof x === "undefined"));

JAM.stopProfile('load');
