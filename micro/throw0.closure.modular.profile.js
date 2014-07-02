function runTest() {

  JAM.startProfile('load');
introspect(JAMScript.introspectors.processAll) {
  throw"exception!";
  }

  JAM.stopProfile('load');

  return "Exception thrown";
}
