function runTest() {

  JAM.startProfile('load');
  document.getElementById = document.getElementsByTagName;
  introspect(JAM.policy.p1) {
    var elt = document.getElementById("ok")
  }

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
