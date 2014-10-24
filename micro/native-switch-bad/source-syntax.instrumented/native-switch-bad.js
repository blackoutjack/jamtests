function runTest() {
  document.getElementsByTagName = document.getElementById;
  introspect(JAM.policy.p1) {
    var elt = document.getElementsByTagName("ok")
  }

  return "RESULT NOT SPECIFIED";
}
