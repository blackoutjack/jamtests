function runTest() {

  JAM.startProfile('load');
var a = 5;
  if(JAMScript.isEval(eval)) {
    eval("introspect(JAMScript.introspectors.processAll) { " + 'a = "ok"' + " }")
  }else {
    JAMScript.call(eval, null, ['a = "ok"'])
  }
  var b = a;

  JAM.stopProfile('load');

  return b === "ok";
}
