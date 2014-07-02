function runTest() {

  JAM.startProfile('load');
introspect(JAMScript.introspectors.processAll) {
  x = 0;
  function f() {
    eval("x = 2");
  }
  f();

  }

  JAM.stopProfile('load');

  return x === 0;
}
