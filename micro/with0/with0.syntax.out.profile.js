function runTest() {

  JAM.startProfile('load');
  // with0.js
  with(document) {
    var elt = JAM.call(getElementById, null, ["note"], JAM.policy.p1)
  }
  JAM.set(elt, "innerHTML", "ok")

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
