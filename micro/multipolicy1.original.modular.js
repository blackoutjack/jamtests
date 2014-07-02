function runTest() {
introspect(JAMScript.introspectors.processAll) {
  var b = 1;
  document.cookie++;
  a[b]++;
  a[c] = 10;

  }

  return "Expect an exception";
}
