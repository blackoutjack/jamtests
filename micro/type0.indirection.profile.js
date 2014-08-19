function runTest() {

  JAM.startProfile('load');
  var a = "ok";
  var b = "k";
  var c = JAM.call(a.indexOf, a, [b], JAM.policy.p1);
  alert(c);

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
