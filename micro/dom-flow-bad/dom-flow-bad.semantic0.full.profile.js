function runTest() {

  JAM.startProfile('load');
  // dom-flow-bad.js
  var label = document.createElement("label");
  label.className = "read-only";
  JAM.set(label, "textContent", "Are you sure you want to delete?", JAM.policy.p1)

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
