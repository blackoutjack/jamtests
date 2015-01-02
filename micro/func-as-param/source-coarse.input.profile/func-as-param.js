
JAM.startProfile('load');
introspect(JAM.policy.pFull) {
function f(g) {
  g();
}
f(function h() {
  x = 2;
});

}

JAM.stopProfile('load');
