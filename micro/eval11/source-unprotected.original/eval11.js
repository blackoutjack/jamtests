function runTest() {
  eval("var x = 4;");
  function f() {
    var y$$30 = x;
    eval("var z;");
    return y$$30;
  }
  z = f();
  alert(z)

  return "RESULT NOT SPECIFIED";
}
