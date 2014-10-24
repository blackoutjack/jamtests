function runTest() {

  JAM.startProfile('load');
  var a = document.getElementById("ok");
  introspect(JAM.policy.p1) {
    a.innerHTML = 1;
  }

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
