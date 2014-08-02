function runTest() {

  JAM.startProfile('load');
  x = 1;
  var e = eval;
  e.apply(null, ["x = 2"]);
  alert(x);

  JAM.stopProfile('load');

  return x === 1;
}
