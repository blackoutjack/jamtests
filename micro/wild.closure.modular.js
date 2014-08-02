function runTest() {
  introspect(JAM.policy.pFull) {
  var a = "ok";
  a.innerHTML = 1;

  }

  return a.innerHTML === undefined;
}
