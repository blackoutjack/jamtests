function runTest() {

  JAM.startProfile('load');
  with(document) {
    var elt = getElementById("note")
  }
  elt.innerHTML = "ok"

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
