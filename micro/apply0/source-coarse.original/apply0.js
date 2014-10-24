function runTest() {
  introspect(JAM.policy.pFull) {
  x = 1;
  var e = eval;
  e.apply(null, ["x = 2"]);
  alert(x)

  }

  return "RESULT NOT SPECIFIED";
}
