var cnt = 10;

  JAM.startProfile('load');
  function f() {
  cnt++;
  return 3;
}
var a = [4,6,8,10,12];
var i = 2;
var b;
//b = ++(a[f()]);
b = a[f()] += 1;

  JAM.stopProfile('load');

//b = a[f()] = a[f()] + 1;
alert("a: " + a + " b: " + b + " i: " + i + " cnt: " + cnt);
