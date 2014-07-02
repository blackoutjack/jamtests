function runTest() {
introspect(JAMScript.introspectors.processAll) {
  var a = "ok";
  a.innerHTML = 1;

  }

  return a.innerHTML === undefined;
}
