function runTest() {
JAMScript.isEval(eval)?eval('introspect(JAMScript.introspectors.processAll) { eval("var xxx = 10;"); }'):JAMScript.call(eval,null,['eval("var xxx = 10;");']);alert(xxx);

  return "RESULT NOT SPECIFIED";
}
