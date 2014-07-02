function runTest() {
introspect(JAMScript.introspectors.processAll) {
  function h$$4() {
    x = 2;
    return
  }
  function f(g) {
    g();
    return
  }
  f(h$$4);

  }

  return typeof x === "undefined";
}
