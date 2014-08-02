function runTest() {

  JAM.startProfile('load');
  introspect(JAM.policy.pFull) {
  var a = 5;
  eval("a = \"ok\"");
  var b = a;

  }

  JAM.stopProfile('load');

  return b === "ok";
}
