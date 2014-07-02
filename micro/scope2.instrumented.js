function runTest() {
function f(p) {
    alert(p);
    return
  }
  function c() {
    this.m = f;
    return
  }
  var o = new c;
  var a = o.m("ok");

  return a === undefined;
}
