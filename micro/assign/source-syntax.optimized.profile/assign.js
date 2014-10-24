function runTest() {

  JAM.startProfile('load');
  var a=document;introspect(JAM.policy.p1)a.cookie="ok"

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
