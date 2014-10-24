function runTest() {

  JAM.startProfile('load');
  var a="ok",b="k",c=JAM.call(a.indexOf,a,[b],JAM.policy.p1);JAM.call(alert,null,[c],JAM.policy.p1)

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
