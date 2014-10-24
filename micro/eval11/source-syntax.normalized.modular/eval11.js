function runTest() {
  introspect(JAM.policy.pFull) {
  function f() {
    var y$$30 = x;
    eval("var z;");
    return y$$30;
  }
  eval("var x = 4;");
  z = f();
  alert(z)

  }

  return "RESULT NOT SPECIFIED";
}
