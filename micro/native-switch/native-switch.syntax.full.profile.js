function runTest() {

  JAM.startProfile('load');
  // native-switch.js
  document.getElementById = document.getElementsByTagName;
  var elt = JAM.call(document.getElementById, document, ["ok"], JAM.policy.p1)

  JAM.stopProfile('load');

  return elt instanceof HTMLCollection;
}
