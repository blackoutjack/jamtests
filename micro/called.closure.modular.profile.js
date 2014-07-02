function runTest() {

  JAM.startProfile('load');
introspect(JAMScript.introspectors.processAll) {
  var f = document;
  var x = f.getElementsByTagName("ok");

  }

  JAM.stopProfile('load');

  return x instanceof HTMLCollection;
}
