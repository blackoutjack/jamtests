function runTest() {
introspect(JAMScript.introspectors.processAll) {
  function f() {
    x = 2;
    return
  }
  f();
  x = 2;

  }

  return typeof x === "undefined";
}
