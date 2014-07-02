function runTest() {
introspect(JAMScript.introspectors.processAll) {
  function f() {
    return 2
  }
  x = 3;
  x = f();

  }

  return x === 3;
}
