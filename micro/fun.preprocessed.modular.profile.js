function runTest() {

  JAM.startProfile('load');
introspect(JAMScript.introspectors.processAll) {
  function f() {
    return 2
  }
  x = 3;
  x = f();

  }

  JAM.stopProfile('load');

  return x === 3;
}
