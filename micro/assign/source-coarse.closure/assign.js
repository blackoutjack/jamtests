function runTest() {
  introspect(JAM.policy.pFull) {
  var a = document;
  a.cookie = "ok"

  }

  return document.cookie !== "ok";
}
