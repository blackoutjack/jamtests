function runTest() {
  document.getElementsByTagName = document.getElementById;
  var elt = JAM.call(document.getElementsByTagName, document, ["ok"], JAM.policy.p1)

  return "RESULT NOT SPECIFIED";
}
