function runTest() {

  JAM.startProfile('load');
  introspect(JAM.policy.pFull) {
  function f() {}
  document.getElementById = f;
  var elt = document.getElementById("ok");

  }

  JAM.stopProfile('load');

  return elt === undefined;
}
