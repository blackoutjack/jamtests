function runTest() {
introspect(JAMScript.introspectors.processAll) {
  var a = document.write("ok");
  var b = document.createElement("script");
  var c = document.write("fine");

  }

  return "Expect an exception";
}
