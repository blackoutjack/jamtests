function runTest() {
  x = 3;
  function f() {
    return 2;
  }
  x = f()

  return x === 3;
}
