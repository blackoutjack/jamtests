function runTest() {

  JAM.startProfile('load');
  // scope2.js
  function f(p) {
    alert(p);
    return;
  }
  function c() {
    this.m = f;
    return;
  }
  var o = new c;
  var a = JAM.call(o.m, o, ["ok"])

  JAM.stopProfile('load');

  return a === undefined;
}
