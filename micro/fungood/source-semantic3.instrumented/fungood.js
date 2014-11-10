function runTest() {
  function f() {
    return 4;
  }
  x = 3;
  x = f()

  return x === 4;
}
