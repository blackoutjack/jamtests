function runTest() {
function f(){var y=x;JAMScript.isEval(eval)?eval("introspect(JAMScript.introspectors.processAll) { var z; }"):JAMScript.call(eval,null,["var z;"]);return y}JAMScript.isEval(eval)?eval("introspect(JAMScript.introspectors.processAll) { var x = 4; }"):JAMScript.call(eval,null,["var x = 4;"]);z=f();alert(z);

  return "RESULT NOT SPECIFIED";
}
