function runTest() {
  // condition.js
  var P = false;
  if (P) {
    x = 2;
  }

  return typeof x === "undefined";
}
