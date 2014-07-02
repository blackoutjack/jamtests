function runTest() {

  JAM.startProfile('load');
introspect(JAMScript.introspectors.processAll) {
  eval("var xxx = 5;");
  alert(xxx);

  }

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
