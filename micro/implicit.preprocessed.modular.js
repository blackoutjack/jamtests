function runTest() {
introspect(JAMScript.introspectors.processAll) {
  function f() {
    x = 3;
    return
  }
  f();
  x = 2;

  }

  return x === 3;
}
