function runTest() {

  JAM.startProfile('load');
  x = 1;
  var e = eval;
  var v0 = ["x = 2"];
  JAM.call(e.apply, e, [null, v0]);
  alert(x)

  JAM.stopProfile('load');

  return x === 1;
}
