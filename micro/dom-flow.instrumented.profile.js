function runTest() {

  JAM.startProfile('load');
  var label = document.createElement("label");
  introspect(JAM.policy.p1) {
    label.textContent = "Are you sure you want to delete?"
  }
  ;

  JAM.stopProfile('load');

  return label.textContent === "Are you sure you want to delete?";
}
