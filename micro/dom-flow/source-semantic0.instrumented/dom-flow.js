function runTest() {
  var label = document.createElement("label");
  introspect(JAM.policy.p1) {
    label.textContent = "Are you sure you want to delete?";
  }

  return label.textContent === "Are you sure you want to delete?";
}
