
JAM.startProfile('load');
function f(g) {
  g();
}
f(function h() {
  x = 2;
});

JAM.stopProfile('load');
