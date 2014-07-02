function runTest() {
document.getElementById = document.getElementsByTagName;
  var elt = JAMScript.call(document.getElementById, document, ["ok"]);

  return elt instanceof HTMLCollection;
}
