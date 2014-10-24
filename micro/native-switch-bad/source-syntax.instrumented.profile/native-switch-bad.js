function runTest() {

  JAM.startProfile('load');
  document.getElementsByTagName = document.getElementById;
  introspect(JAM.policy.p1) {
    var elt = document.getElementsByTagName("ok")
  }

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
