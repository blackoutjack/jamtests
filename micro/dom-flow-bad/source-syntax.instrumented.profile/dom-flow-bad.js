function runTest() {

  JAM.startProfile('load');
  var label = document.createElement("label");
  label.className = "read-only";
  introspect(JAM.policy.p1) {
    label.textContent = "Are you sure you want to delete?";
  }

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
