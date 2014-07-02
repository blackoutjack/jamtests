function runTest() {
introspect(JAMScript.introspectors.processAll) {
  eval("eval(\"var xxx = 10;\");");
  alert(xxx);

  }

  return "RESULT NOT SPECIFIED";
}
