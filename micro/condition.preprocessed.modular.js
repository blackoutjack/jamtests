function runTest() {
introspect(JAMScript.introspectors.processAll) {
  var P = false;
  if(P) {
    x = 2
  }
  ;
  }

  return typeof x === "undefined";
}
