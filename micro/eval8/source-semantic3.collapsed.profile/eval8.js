function runTest() {

  JAM.startProfile('load');
  if (JAM.isEval(eval)) {
    eval("introspect(JAM.policy.pFull) { " + 'eval("var xxx = 10;");' + " }");
  } else {
    JAM.call(eval, null, ['eval("var xxx = 10;");']);
  }
  alert(xxx)

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
