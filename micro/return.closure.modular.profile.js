function runTest() {

  JAM.startProfile('load');
introspect(JAMScript.introspectors.processAll) {
  function f() {
    x = 2
  }
  f();
  x = 2;

  }

  JAM.stopProfile('load');

  return typeof x === "undefined";
}
