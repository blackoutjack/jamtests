function f(g) {

  JAM.startProfile('load');
  g();
}
f(function h() {

  JAM.stopProfile('load');

  x = 2;
});
