function runTest() {
  var a = "ok";
  JAM.set(a, "innerHTML", 1, JAM.policy.pD4D25E04A23263FBD77B896710421141724AE95D);

  return a.innerHTML === undefined;
}
