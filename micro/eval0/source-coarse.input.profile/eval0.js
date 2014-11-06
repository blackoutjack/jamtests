x = 0;

  JAM.startProfile('load');
  introspect(JAM.policy.pFull) {
  var e = eval;
function f() {
  e("x = 2");

  }

  JAM.stopProfile('load');

}
f();
