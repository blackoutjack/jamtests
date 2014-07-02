function runTest() {

  JAM.startProfile('load');
introspect(JAMScript.introspectors.processAll) {
  function f(g) {
    g()
  }
  f(function h$$4() {
    x = 2
  });

  }

  JAM.stopProfile('load');

  return typeof x === "undefined";
}
