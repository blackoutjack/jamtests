function runTest() {
introspect(JAMScript.introspectors.processAll) {
  x = 0;
  function f() {
    eval("x = 2");
  }
  f();

  }

  return x === 0;
}
