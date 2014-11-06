function f() {

  JAM.startProfile('load');
  introspect(JAM.policy.pFull) {
  return 2;
}
function g() {
  return 1;
}

  }

  JAM.stopProfile('load');

var v = 5;
var a = v + (++v, f()) + g();
