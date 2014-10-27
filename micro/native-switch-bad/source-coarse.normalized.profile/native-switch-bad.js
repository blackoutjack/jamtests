function runTest() {

  JAM.startProfile('load');
  introspect(JAM.policy.pFull) {
  document.getElementsByTagName = document.getElementById;
  var elt = document.getElementsByTagName("ok")

  }

  JAM.stopProfile('load');

  return "Expect an exception";
}
