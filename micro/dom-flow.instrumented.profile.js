function runTest() {

  JAM.startProfile('load');
var label = document.createElement("label");
  introspect(JAMScript.introspectors.process6FC57D54E3DC1AB1C47F352EDE6E2B7366E67743) {
    label.textContent = "Are you sure you want to delete?"
  }
  ;

  JAM.stopProfile('load');

  return label.textContent === "Are you sure you want to delete?";
}
