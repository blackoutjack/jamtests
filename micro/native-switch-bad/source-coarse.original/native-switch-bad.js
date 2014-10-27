function runTest() {
  introspect(JAM.policy.pFull) {
  document.getElementsByTagName = document.getElementById;
  var elt = document.getElementsByTagName("ok")

  }

  return "Expect an exception";
}
