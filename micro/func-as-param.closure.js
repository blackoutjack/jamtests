function runTest() {
  function f(g) {
    g()
  }
  f(function h$$4() {
    x = 2
  });

  return typeof x === "undefined";
}
