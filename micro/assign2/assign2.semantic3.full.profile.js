function runTest() {

  JAM.startProfile('load');
  // assign2.js
  var a = [4, 6, 8, 10, 12];
  var b;
  var i = 0;
  b = a[i] = a[i] + (i = i + 1);
  alert("a: " + a + " b: " + b + " i: " + i)

  JAM.stopProfile('load');

  return b === 5 && i === 1;
}
