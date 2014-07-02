function runTest() {
function f() {
    if (typeof x === "undefined") {
      //do nothing
    } else {
      x = 2;
    }
  }
  f();

  return typeof x === "undefined";
}
