function runTest() {

  JAM.startProfile('load');
  if (JAM.isEval(eval)) {
    eval("introspect(JAM.policy.pFull) { " + "var xxx = 5;" + " }");
  } else {
    JAM.call(eval, null, ["var xxx = 5;"]);
  }
  alert(xxx)

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
