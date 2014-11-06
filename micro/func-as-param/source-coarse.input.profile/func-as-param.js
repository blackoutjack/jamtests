function f(g) {

  JAM.startProfile('load');
  introspect(JAM.policy.pFull) {
  g();
}
f(function h() {

  }

  JAM.stopProfile('load');

  x = 2;
});
