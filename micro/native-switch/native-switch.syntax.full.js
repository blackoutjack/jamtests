function runTest() {
  // native-switch.js
  document.getElementById = document.getElementsByTagName;
  var elt = JAM.call(document.getElementById, document, ["ok"], JAM.policy.p1)

  return elt instanceof HTMLCollection;
}
