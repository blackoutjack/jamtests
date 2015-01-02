
JAM.startProfile('load');
function runTest() {
  document.getElementById = document.getElementsByTagName;
  introspect(JAM.policy.p1) {
    var elt = document.getElementById("ok")
  }

  return elt instanceof HTMLCollection;
}

JAM.stopProfile('load');
