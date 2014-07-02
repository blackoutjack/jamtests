function runTest() {

  JAM.startProfile('load');
introspect(JAMScript.introspectors.processAll) {
  var label = document.createElement("label");
  label.textContent = "Are you sure you want to delete?";

  }

  JAM.stopProfile('load');

  return label.textContent === "Are you sure you want to delete?";
}
