function runTest() {

  JAM.startProfile('load');
  // native-switch.js
  document.getElementById = document.getElementsByTagName;
  var elt = JAM.call(document.getElementById, document, ["ok"])

  JAM.stopProfile('load');

  return elt instanceof HTMLCollection;
}
