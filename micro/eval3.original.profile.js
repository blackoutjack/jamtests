function runTest() {

  JAM.startProfile('load');
var a = new String();
  eval("String = Boolean"); 
  var b = new String();

  JAM.stopProfile('load');

  return b instanceof Boolean && !(a instanceof Boolean);
}
