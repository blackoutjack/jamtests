function runTest() {
introspect(JAMScript.introspectors.processAll) {
  var a = "ok";
  var b = "k";
  var c = a.indexOf(b);
  alert(c);

  }

  return "RESULT NOT SPECIFIED";
}
