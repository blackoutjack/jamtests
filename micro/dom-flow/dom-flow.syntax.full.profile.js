function runTest() {

  JAM.startProfile('load');
  // dom-flow.js
  var label = document.createElement("label");
  JAM.set(label, "textContent", "Are you sure you want to delete?", JAM.policy.p1)

  JAM.stopProfile('load');

  return label.textContent === "Are you sure you want to delete?";
}
