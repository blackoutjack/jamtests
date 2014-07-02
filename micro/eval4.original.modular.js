function runTest() {
introspect(JAMScript.introspectors.processAll) {
  var a = 5;
  eval("a = \"ok\"");
  var b = a;

  }

  return b === "ok";
}
