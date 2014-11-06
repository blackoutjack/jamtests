function f() {

  JAM.startProfile('load');
  introspect(JAM.policy.pFull) {
  return this.indexOf("k");
}

  }

  JAM.stopProfile('load');

var g = f.bind("ok");
var v = g();
