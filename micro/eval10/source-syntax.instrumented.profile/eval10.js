function runTest() {

  JAM.startProfile('load');
  function f() {
    var y$$30 = x;
    eval('eval("var x;");');
    return y$$30;
  }
  introspect(JAM.policy.p1) {
    x = 4;
  }
  var z = f()

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
