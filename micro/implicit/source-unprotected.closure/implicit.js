function runTest() {
  function f() {
    x = 3;
  }
  f();
  x = 2

  return x === 3;
}
