function runTest() {
function f(){var y=x;JAMScript.isEval(eval)?eval('introspect(JAMScript.introspectors.processAll) { eval("var x;"); }'):JAMScript.call(eval,null,['eval("var x;");']);return y}x=4;var z=f();

  return "RESULT NOT SPECIFIED";
}
