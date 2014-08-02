function runTest() {

  JAM.startProfile('load');
  JAM.isEval(eval)?eval("introspect(JAM.policy.pFull) { var xxx = 5; }"):JAM.call(eval,null,["var xxx = 5;"]);alert(xxx);

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
