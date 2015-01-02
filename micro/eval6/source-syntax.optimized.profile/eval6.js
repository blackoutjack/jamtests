
JAM.startProfile('load');
function runTest() {
  JAM.isEval(eval)?eval("introspect(JAM.policy.pFull) { var xxx = 5; }"):JAM.call(eval,null,["var xxx = 5;"]);alert(xxx)

  return "RESULT NOT SPECIFIED";
}

JAM.stopProfile('load');
