function runTest() {
  introspect(JAM.policy.pFull) {
  document.getElementById = document.getElementsByTagName;
  var elt = document.getElementById("ok")

  }

  return "RESULT NOT SPECIFIED";
}
