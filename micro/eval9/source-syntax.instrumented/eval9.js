function runTest() {
  function f() {
    var y$$30 = x;
    eval("var x;");
    return y$$30;
  }
  introspect(JAM.policy.p1) {
    x = 4;
  }
  var z = f()

  return "RESULT NOT SPECIFIED";
}
