function runTest() {
introspect(JAMScript.introspectors.processAll) {
  var a = new String();
  eval("String = Boolean"); 
  var b = new String();

  }

  return b instanceof Boolean && !(a instanceof Boolean);
}
