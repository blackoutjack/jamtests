function runTest() {

  JAM.startProfile('load');
  var s = "ok";
  var v1 = s.indexOf("k");
  var v0 = !v1;
  if (v0) {
    x = 2;
  }

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
