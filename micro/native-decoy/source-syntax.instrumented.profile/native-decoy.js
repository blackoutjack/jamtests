function runTest() {

  JAM.startProfile('load');
  function f() {
    return;
  }
  document.getElementById = f;
  introspect(JAM.policy.p1) {
    var elt = document.getElementById("ok")
  }

  JAM.stopProfile('load');

  return elt === undefined;
}
