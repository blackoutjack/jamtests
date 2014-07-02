function runTest() {

  JAM.startProfile('load');
introspect(JAMScript.introspectors.processAll) {
  function f() {
    eval("x = 2");
    return
  }
  x = 0;
  f();

  }

  JAM.stopProfile('load');

  return x === 0;
}
