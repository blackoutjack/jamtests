function runTest() {

  JAM.startProfile('load');
  eval("var x = 4;");
  function f() {
    var y$$30 = x;
    eval("var z;");
    return y$$30;
  }
  z = f();
  alert(z)

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
