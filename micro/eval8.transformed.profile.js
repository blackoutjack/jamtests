function runTest() {

  JAM.startProfile('load');
if(JAMScript.isEval(eval)) {
    eval("introspect(JAMScript.introspectors.processAll) { " + 'eval("var xxx = 10;");' + " }")
  }else {
    JAMScript.call(eval, null, ['eval("var xxx = 10;");'])
  }
  alert(xxx);

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
