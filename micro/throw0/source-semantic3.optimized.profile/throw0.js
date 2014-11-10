function runTest() {

  JAM.startProfile('load');
  throw"exception!"

  JAM.stopProfile('load');

  return "Exception thrown";
}
