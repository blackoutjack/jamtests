function runTest() {
  var label = document.createElement("label");
  label.textContent = "Are you sure you want to delete?"

  return label.textContent === "Are you sure you want to delete?";
}
