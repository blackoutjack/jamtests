function runTest() {

  JAM.startProfile('load');
  introspect(JAM.policy.pFull) {
  var a = document.write("ok");
  var b = document.createElement("script");
  var c = document.write("fine")

  }

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
