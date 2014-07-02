function runTest() {
function f(g) {
    g();
  }
  f(function h() {
    x = 2;
  });

  return typeof x === "undefined";
}
