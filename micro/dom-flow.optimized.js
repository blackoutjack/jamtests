function runTest() {
  var label=document.createElement("label");JAM.set(label,"textContent","Are you sure you want to delete?",JAM.policy.p1);

  return label.textContent === "Are you sure you want to delete?";
}
