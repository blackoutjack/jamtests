function runTest() {

  JAM.startProfile('load');
function f(){JAMScript.call(e,null,["x = 2"])}x=0;var e=eval;f();

  JAM.stopProfile('load');

  return x === 0;
}
