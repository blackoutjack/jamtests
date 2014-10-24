function runTest() {
  var a="ok",b="k",c=JAM.call(a.indexOf,a,[b],JAM.policy.p1);JAM.call(alert,null,[c],JAM.policy.p1)

  return "RESULT NOT SPECIFIED";
}
