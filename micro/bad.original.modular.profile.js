function runTest() {

  JAM.startProfile('load');
introspect(JAMScript.introspectors.processAll) {
  x = 2

  }

  JAM.stopProfile('load');

  return typeof x === "undefined";
}
