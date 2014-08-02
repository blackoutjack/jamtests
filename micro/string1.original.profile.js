function runTest() {

  JAM.startProfile('load');
  var o = {};
  o.src = "http://something";
  alert(o.src);

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
