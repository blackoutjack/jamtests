function runTest() {
var label = document.createElement("label");
  JAMScript.set(label, "textContent", "Are you sure you want to delete?", JAMScript.introspectors.process6FC57D54E3DC1AB1C47F352EDE6E2B7366E67743);

  return label.textContent === "Are you sure you want to delete?";
}
