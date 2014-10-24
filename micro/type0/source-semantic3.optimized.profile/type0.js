function runTest() {

  JAM.startProfile('load');
  var a="ok",b="k",c=JAM.call(a.indexOf,a,[b],JAM.policy.p1);alert(c)

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
