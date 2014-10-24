function runTest() {

  JAM.startProfile('load');
  // condition.js
  var P = false;
  if (P) {
    x = 2;
  }

  JAM.stopProfile('load');

  return typeof x === "undefined";
}
