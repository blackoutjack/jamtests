function runTest() {

  JAM.startProfile('load');
introspect(JAMScript.introspectors.processAll) {
  x = y;

  }

  JAM.stopProfile('load');

  return "Expect an exception";
}
