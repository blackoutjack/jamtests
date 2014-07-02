function runTest() {
JAMScript.isEval(eval)?eval("introspect(JAMScript.introspectors.processAll) { var xxx = 5; }"):JAMScript.call(eval,null,["var xxx = 5;"]);alert(xxx);

  return "RESULT NOT SPECIFIED";
}
