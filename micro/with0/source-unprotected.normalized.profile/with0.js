
JAM.startProfile('load');
with(document) {
  var elt = getElementById("note")
}
elt.innerHTML = "ok"

JAM.log("Result: " + ("RESULT NOT SPECIFIED"));

JAM.stopProfile('load');
