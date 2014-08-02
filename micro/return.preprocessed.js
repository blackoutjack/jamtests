function runTest() {
  function f() {
    x = 2;
    return
  }
  f();
  x = 2;

  return typeof x === "undefined";
}
