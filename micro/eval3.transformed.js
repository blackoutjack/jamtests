function runTest() {
var a = new String;
  if(JAMScript.isEval(eval)) {
    eval("introspect(JAMScript.introspectors.processAll) { " + "String = Boolean" + " }")
  }else {
    JAMScript.call(eval, null, ["String = Boolean"])
  }
  var b = new String;

  return b instanceof Boolean && !(a instanceof Boolean);
}
