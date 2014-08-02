function runTest() {
  var a = new String();
  eval("String = Boolean"); 
  var b = new String();

  return b instanceof Boolean && !(a instanceof Boolean);
}
