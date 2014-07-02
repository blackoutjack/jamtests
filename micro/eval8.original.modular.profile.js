function runTest() {

  JAM.startProfile('load');
introspect(JAMScript.introspectors.processAll) {
  eval("eval(\"var xxx = 10;\");");
  alert(xxx);

  }

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
