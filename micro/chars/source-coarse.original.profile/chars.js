function runTest() {

  JAM.startProfile('load');
  introspect(JAM.policy.pFull) {
  var y = "tab|\u0019|tab";
  var x = y

  }

  JAM.stopProfile('load');

  return x === "tab|\u0019|tab";
}
