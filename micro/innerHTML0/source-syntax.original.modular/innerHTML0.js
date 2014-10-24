function runTest() {
  introspect(JAM.policy.pFull) {
  x = 1;
  var elt = document.getElementById("test");
  elt.innerHTML = "<script>x = 2\x3c/script>"

  }

  return "RESULT NOT SPECIFIED";
}
