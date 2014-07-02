function runTest() {

  JAM.startProfile('load');
function f() {
    if(JAMScript.isEval(eval)) {
      eval("introspect(JAMScript.introspectors.processAll) { " + "x = 2" + " }")
    }else {
      JAMScript.call(eval, null, ["x = 2"])
    }
    return
  }
  x = 0;
  f();

  JAM.stopProfile('load');

  return x === 0;
}
