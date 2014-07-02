function runTest() {

  JAM.startProfile('load');
function f() {
    cnt++;
    return 3
  }
  var cnt = 10;
  var a = [4, 6, 8, 10, 12];
  var i = 2;
  var b;
  b = a[f()] += 1;
  alert("a: " + a + " b: " + b + " i: " + i + " cnt: " + cnt);

  JAM.stopProfile('load');

  return b === 11 && i === 2 && cnt === 11;
}
