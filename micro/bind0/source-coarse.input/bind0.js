function f() {
  introspect(JAM.policy.pFull) {
  return this.indexOf("k");
}

  }

var g = f.bind("ok");
var v = g();
