function runTest() {

  JAM.startProfile('load');
  introspect(JAM.policy.pFull) {
  var label = document.createElement("label");
  label.textContent = "Are you sure you want to delete?";

  }

  JAM.stopProfile('load');

  return label.textContent === "Are you sure you want to delete?";
}
