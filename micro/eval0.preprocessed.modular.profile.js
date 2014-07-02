function runTest() {

  JAM.startProfile('load');
introspect(JAMScript.introspectors.processAll) {
  function f() {
    e("x = 2");
    return
  }
  x = 0;
  var e = eval;
  f();

  }

  JAM.stopProfile('load');

  return x === 0;
}
