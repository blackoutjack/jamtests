function runTest() {

  JAM.startProfile('load');
  introspect(JAM.policy.pFull) {
  function f(p) {
    alert(p);
    return;
  }
  function c() {
    this.m = f;
    return;
  }
  var o = new c;
  var a = o.m("ok")

  }

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
