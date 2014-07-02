function runTest() {

  JAM.startProfile('load');
document.getElementById = document.getElementsByTagName;
  var elt = JAMScript.call(document.getElementById, document, ["ok"]);

  JAM.stopProfile('load');

  return elt instanceof HTMLCollection;
}
