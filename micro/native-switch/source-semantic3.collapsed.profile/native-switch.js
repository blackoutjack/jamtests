function runTest() {

  JAM.startProfile('load');
  document.getElementById = document.getElementsByTagName;
  var elt = JAM.call(document.getElementById, document, ["ok"])

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
