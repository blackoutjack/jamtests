function runTest() {
introspect(JAMScript.introspectors.processAll) {
  document.getElementsByTagName = document.getElementById;
  var elt = document.getElementsByTagName("ok");

  }

  return "Expect an exception";
}
