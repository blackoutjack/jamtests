
JAM.startProfile('load');
function runTest() {
  throw "exception!"

  return "Exception thrown";
}

JAM.stopProfile('load');
