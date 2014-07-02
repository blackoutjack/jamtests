function runTest() {

  JAM.startProfile('load');
introspect(JAMScript.introspectors.processAll) {
  document.getElementById = document.getElementsByTagName;
  var elt = document.getElementById("ok");

  }

  JAM.stopProfile('load');

  return elt instanceof HTMLCollection;
}
