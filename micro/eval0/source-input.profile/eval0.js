x = 0;

  JAM.startProfile('load');
  var e = eval;
function f() {
  e("x = 2");

  JAM.stopProfile('load');

}
f();
