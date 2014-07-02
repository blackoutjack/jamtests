function runTest() {
introspect(JAMScript.introspectors.processAll) {
  var s = "ok";
  if(!s.indexOf("k")) {
    x = 2
  }
  ;
  }

  return typeof x === "undefined";
}
