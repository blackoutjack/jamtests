function runTest() {
introspect(JAMScript.introspectors.processAll) {
  x = 1;
  var e = eval.bind(null, "x = 2");
  e();

  }

  return x === 1;
}
