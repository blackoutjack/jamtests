function f() {
  introspect(JAM.policy.pFull) {
  return 2;
}
function g() {
  return 1;
}

  }

var v = 5;
var a = v + (++v, f()) + g();
