function runTest() {
introspect(JAMScript.introspectors.processAll) {
  var o = {};
  o.src = "http://something";
  alert(o.src);

  }

  return "RESULT NOT SPECIFIED";
}
