function f() {
  introspect(JAM.policy.pFull) {
  eval("String.prototype.indexOf = String.prototype.toLowerCase;");
  var v = "OK".indexOf("K");
  return v;

  }

}
x = f();
