function runTest() {
  // native-switch.js
  document.getElementById = document.getElementsByTagName;
  var elt = JAM.call(document.getElementById, document, ["ok"])

  return elt instanceof HTMLCollection;
}
