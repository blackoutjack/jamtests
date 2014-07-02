function runTest() {
introspect(JAMScript.introspectors.processAll) {
  document.getElementById = document.getElementsByTagName;
  var elt = document.getElementById("ok");

  }

  return elt instanceof HTMLCollection;
}
