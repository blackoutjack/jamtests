function runTest() {
  with(document) {
    introspect(JAM.policy.p1) {
      var elt = getElementById("note")
    }
  }
  elt.innerHTML = "ok"

  return "RESULT NOT SPECIFIED";
}
