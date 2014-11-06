function f() {

  JAM.startProfile('load');
  introspect(JAM.policy.pFull) {
  eval("String.prototype.indexOf = String.prototype.toLowerCase;");
  var v = "OK".indexOf("K");
  return v;

  }

  JAM.stopProfile('load');

}
x = f();
