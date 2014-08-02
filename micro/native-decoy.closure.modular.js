function runTest() {
  introspect(JAM.policy.pFull) {
  function f() {
  }
  document.getElementById = f;
  var elt = document.getElementById("ok");

  }

  return elt === undefined;
}
