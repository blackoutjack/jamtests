function runTest() {

  JAM.startProfile('load');
  // eval3.js
  var a = new String;
  if (JAM.isEval(eval)) {
    eval("introspect(JAM.policy.pFull) { " + "String = Boolean" + " }");
  } else {
    JAM.call(eval, null, ["String = Boolean"]);
  }
  var b = new String

  JAM.stopProfile('load');

  return b instanceof Boolean && !(a instanceof Boolean);
}
