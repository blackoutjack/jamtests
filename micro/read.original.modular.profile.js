function runTest() {

  JAM.startProfile('load');
introspect(JAMScript.introspectors.processAll) {
  var a = document;
  var b = a.cookie;

  }

  JAM.stopProfile('load');

  return b === undefined;
}
