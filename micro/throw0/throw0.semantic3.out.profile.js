function runTest() {

  JAM.startProfile('load');
  // throw0.js
  throw "exception!"

  JAM.stopProfile('load');

  return "Exception thrown";
}
