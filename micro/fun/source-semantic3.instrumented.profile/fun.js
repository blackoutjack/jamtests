
JAM.startProfile('load');
function f() {
  return 2;
}
x = 3;
introspect(JAM.policy.p1) {
  x = f();
}

JAM.log("Result: " + (x === 3));

JAM.stopProfile('load');
