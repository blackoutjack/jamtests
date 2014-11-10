function runTest() {

  JAM.startProfile('load');
  function f() {
    eval("String.prototype.indexOf = String.prototype.toLowerCase;");
    var v = "OK".indexOf("K");
    return v;
  }
  introspect(JAM.policy.p1) {
    x = f();
  }

  JAM.stopProfile('load');

  return x === "ok";
}
