function runTest() {

  JAM.startProfile('load');
  var a = document;
  a.cookie = "ok"

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
