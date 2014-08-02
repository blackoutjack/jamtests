function runTest() {
  function f() {
    e("x = 2");
    return
  }
  x = 0;
  var e = eval;
  f();

  return x === 0;
}
