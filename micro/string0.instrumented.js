function runTest() {
  var s = 'is " this " ok' + "?";
  introspect(JAM.policy.p1) {
    x = 2
  }
  ;

  return typeof x === "undefined" && s === "is \" this \" ok?";
}
