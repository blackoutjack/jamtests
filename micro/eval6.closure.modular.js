function runTest() {
introspect(JAMScript.introspectors.processAll) {
  eval("var xxx = 5;");
  alert(xxx);

  }

  return "RESULT NOT SPECIFIED";
}
