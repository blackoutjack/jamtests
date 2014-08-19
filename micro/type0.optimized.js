function runTest() {
  var a="ok",b="k",c=JAM.call(a.indexOf,a,[b],JAM.policy.p1);alert(c);

  return "RESULT NOT SPECIFIED";
}
