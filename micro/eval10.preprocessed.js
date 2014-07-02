function runTest() {
function f() {
    var y$$31 = x;
    eval('eval("var x;");');
    return y$$31
  }
  x = 4;
  var z = f();

  return "RESULT NOT SPECIFIED";
}
