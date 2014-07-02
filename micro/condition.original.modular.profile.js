function runTest() {

  JAM.startProfile('load');
introspect(JAMScript.introspectors.processAll) {
  var P = false
  if (P) {
  	x = 2
  }

  }

  JAM.stopProfile('load');

  return typeof x === "undefined";
}
