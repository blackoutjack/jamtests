function runTest() {
  x = 4;
  function f() {
    var y$$30 = x;
    eval('eval("var x;");');
    return y$$30;
  }
  var z = f()

  return "RESULT NOT SPECIFIED";
}
