function runTest() {

  JAM.startProfile('load');
  var s='is " this " ok?';introspect(JAM.policy.p1)x=2

  JAM.stopProfile('load');

  return typeof x === "undefined" && s === "is \" this \" ok?";
}
