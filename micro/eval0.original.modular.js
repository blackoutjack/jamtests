function runTest() {
introspect(JAMScript.introspectors.processAll) {
  x = 0;
  var e = eval;
  function f() {
    e("x = 2");
  }
  f();

  }

  return x === 0;
}
