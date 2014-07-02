function runTest() {
function f() {
    eval("x = 2")
  }
  x = 0;
  f();

  return x === 0;
}
