function f(g) {
  introspect(JAM.policy.pFull) {
  g();
}
f(function h() {

  }

  x = 2;
});
