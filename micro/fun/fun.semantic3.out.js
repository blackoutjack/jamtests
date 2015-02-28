// fun.js
function f() {
  return 2;
}
x = 3;
var v0 = f();
introspect(JAM.policy.p1) {
  x = v0
}