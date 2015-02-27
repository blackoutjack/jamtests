
JAM.startProfile('load');
introspect(JAM.policy.pFull) {
function f() {
  cnt++;
  return 3;
}
var cnt = 10;
var a = [4, 6, 8, 10, 12];
var i = 2;
var b;
b = a[f()] += 1;
alert("a: " + a + " b: " + b + " i: " + i + " cnt: " + cnt)

JAM.log("Result: " + (b === 11 && i === 2 && cnt === 11));

}

JAM.stopProfile('load');
