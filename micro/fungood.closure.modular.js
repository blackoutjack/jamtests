function runTest() {
introspect(JAMScript.introspectors.processAll) {
  function f() {
    return 4
  }
  x = 3;
  x = f();

  }

  return x === 4;
}
