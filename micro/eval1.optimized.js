function runTest() {
function f(){JAMScript.isEval(eval)?eval("introspect(JAMScript.introspectors.processAll) { x = 2 }"):JAMScript.call(eval,null,["x = 2"])}x=0;f();

  return x === 0;
}
