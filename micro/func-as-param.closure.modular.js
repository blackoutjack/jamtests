function runTest() {
introspect(JAMScript.introspectors.processAll) {
  function f(g) {
    g()
  }
  f(function h$$4() {
    x = 2
  });

  }

  return typeof x === "undefined";
}
