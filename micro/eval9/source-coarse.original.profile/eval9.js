function runTest() {

  JAM.startProfile('load');
  introspect(JAM.policy.pFull) {
  x = 4;
  function f() {
    var y$$30 = x;
    eval("var x;");
    return y$$30;
  }
  var z = f()

  }

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
