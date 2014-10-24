function runTest() {
  introspect(JAM.policy.p2) {
    var a = document.write("ok")
  }
  introspect(JAM.policy.p2) {
    var b = document.createElement("script")
  }
  introspect(JAM.policy.p2) {
    var c = document.write("fine")
  }

  return "RESULT NOT SPECIFIED";
}
