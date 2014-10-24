function runTest() {

  JAM.startProfile('load');
  var a = "ok";
  var b = "k";
  var c = a.indexOf(b);
  alert(c)

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
