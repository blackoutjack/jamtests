function runTest() {

  JAM.startProfile('load');
  var f=document,x=JAM.call(f.getElementsByTagName,f,["ok"],JAM.policy.p1)

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
