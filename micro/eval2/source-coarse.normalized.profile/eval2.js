function runTest() {

  JAM.startProfile('load');
  introspect(JAM.policy.pFull) {
  function f() {
    eval("String.prototype.indexOf = String.prototype.toLowerCase;");
    var v = "OK".indexOf("K");
    return v;
  }
  x = f()

  }

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
