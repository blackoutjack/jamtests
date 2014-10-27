function runTest() {

  JAM.startProfile('load');
  x = 2

  JAM.stopProfile('load');

  return typeof x === "undefined";
}
