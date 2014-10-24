function runTest() {

  JAM.startProfile('load');
  JAM.isEval(eval)?eval('introspect(JAM.policy.pFull) { eval("var xxx = 10;"); }'):JAM.call(eval,null,['eval("var xxx = 10;");']);alert(xxx)

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
