function f(p) { alert(p); }
  introspect(JAM.policy.pFull) {
  function c() {
  this.m = f;
}

  }

var o = new c();
var a = o.m("ok");
