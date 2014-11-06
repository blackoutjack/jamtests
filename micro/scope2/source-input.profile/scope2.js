function f(p) { alert(p); }

  JAM.startProfile('load');
  function c() {
  this.m = f;
}

  JAM.stopProfile('load');

var o = new c();
var a = o.m("ok");
