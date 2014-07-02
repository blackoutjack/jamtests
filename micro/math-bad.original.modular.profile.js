function runTest() {

  JAM.startProfile('load');
introspect(JAMScript.introspectors.processAll) {
  x = Math.floor(Math.random() * 4);

  }

  JAM.stopProfile('load');

  return typeof x === "undefined" || x !== 2;
}
