function runTest() {

  JAM.startProfile('load');
function f(p) { alert(p); }
  function c() {
    this.m = f;
  }
  var o = new c();
  var a = o.m("ok");

  JAM.stopProfile('load');

  return a === undefined;
}
