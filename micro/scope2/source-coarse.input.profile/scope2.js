function f(p) { alert(p); }

  JAM.startProfile('load');
  introspect(JAM.policy.pFull) {
  function c() {
  this.m = f;
}

  }

  JAM.stopProfile('load');

var o = new c();
var a = o.m("ok");
