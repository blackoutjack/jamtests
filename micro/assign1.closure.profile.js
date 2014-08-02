function runTest() {

  JAM.startProfile('load');
  var a = 0;
  var b = 10;
  var c = 20;
  a = b += c += 2;
  alert("a: " + a + " b: " + b + " c: " + c);

  JAM.stopProfile('load');

  return a === 32 && b === 32 && c === 22;
}
