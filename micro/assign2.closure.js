function runTest() {
var a = [4, 6, 8, 10, 12];
  var b;
  var i = 0;
  b = a[i] = a[i] + ++i;
  alert("a: " + a + " b: " + b + " i: " + i);

  return b === 5 && i === 1;
}
