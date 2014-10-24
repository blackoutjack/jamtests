function runTest() {

  JAM.startProfile('load');
  with(document) {
    introspect(JAM.policy.p1) {
      var elt = getElementById("note")
    }
  }
  elt.innerHTML = "ok"

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
