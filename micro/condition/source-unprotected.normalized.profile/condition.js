function runTest() {

  JAM.startProfile('load');
  var P = false;
  if (P) {
    x = 2;
  }

  JAM.stopProfile('load');

  return typeof x === "undefined";
}
