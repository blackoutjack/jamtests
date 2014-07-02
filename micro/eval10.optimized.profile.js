function runTest() {

  JAM.startProfile('load');
function f(){var y=x;JAMScript.isEval(eval)?eval('introspect(JAMScript.introspectors.processAll) { eval("var x;"); }'):JAMScript.call(eval,null,['eval("var x;");']);return y}x=4;var z=f();

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
