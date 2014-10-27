function runTest() {

  JAM.startProfile('load');
  introspect(JAM.policy.pFull) {
  var s = 'is " this " ok' + "?";
  x = 2

  }

  JAM.stopProfile('load');

  return typeof x === "undefined" && s === "is \" this \" ok?";
}
