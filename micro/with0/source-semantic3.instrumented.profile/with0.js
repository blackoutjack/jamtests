
JAM.startProfile('load');
with(document) {
  introspect(JAM.policy.p1) {
    var elt = getElementById("note")
  }
}
elt.innerHTML = "ok"

JAM.log("Result: " + ("RESULT NOT SPECIFIED"));

JAM.stopProfile('load');
