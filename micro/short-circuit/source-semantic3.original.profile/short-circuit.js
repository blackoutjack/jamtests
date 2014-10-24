function runTest() {

  JAM.startProfile('load');
  var a = 0;
  var b = 1;
  x = a && b + 1

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
