function runTest() {

  JAM.startProfile('load');
  introspect(JAM.policy.pFull) {
  var a = document.getElementById("ok");
  a.innerHTML = 1

  }

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
