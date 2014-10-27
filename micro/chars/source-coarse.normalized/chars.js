function runTest() {
  introspect(JAM.policy.pFull) {
  var y = "tab|\u0019|tab";
  var x = y

  }

  return x === "tab|\u0019|tab";
}
