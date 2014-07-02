function runTest() {

  JAM.startProfile('load');
function f(){JAMScript.isEval(eval)?eval("introspect(JAMScript.introspectors.processAll) { x = 2 }"):JAMScript.call(eval,null,["x = 2"])}x=0;f();

  JAM.stopProfile('load');

  return x === 0;
}
