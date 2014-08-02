function runTest() {
  introspect(JAM.policy.pFull) {
  var s = 'is " this " ok' + "?";
  x = 2;

  }

  return typeof x === "undefined" && s === "is \" this \" ok?";
}
