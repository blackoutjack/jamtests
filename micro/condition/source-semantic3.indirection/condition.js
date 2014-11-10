function runTest() {
  var P = false;
  if (P) {
    x = 2;
  }

  return typeof x === "undefined";
}
