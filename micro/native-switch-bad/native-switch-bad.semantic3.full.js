function runTest() {
  // native-switch-bad.js
  document.getElementsByTagName = document.getElementById;
  var elt = JAM.call(document.getElementsByTagName, document, ["ok"], JAM.policy.p1)

  return "Expect an exception";
}
