function runTest() {

  JAM.startProfile('load');
  x = 1;
  var e = JAM.call(eval.bind, eval, [null, "x = 2"]);
  e();

  JAM.stopProfile('load');

  return x === 1;
}
