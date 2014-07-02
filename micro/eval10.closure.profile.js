function runTest() {

  JAM.startProfile('load');
function f() {
    var y$$31 = x;
    eval('eval("var x;");');
    return y$$31
  }
  x = 4;
  var z = f();

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
