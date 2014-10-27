function runTest() {

  JAM.startProfile('load');
  var a = document;
  var b = a.cookie

  JAM.stopProfile('load');

  return b === undefined;
}
