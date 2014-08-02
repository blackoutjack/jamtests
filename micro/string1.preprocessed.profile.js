function runTest() {

  JAM.startProfile('load');
  var o = {};
  o.src = "http://something";
  var v0 = o.src;
  alert(v0);

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
