function runTest() {

  JAM.startProfile('load');
  introspect(JAM.policy.pFull) {
  document.getElementById = document.getElementsByTagName;
  var elt = document.getElementById("ok")

  }

  JAM.stopProfile('load');

  return elt instanceof HTMLCollection;
}
