function runTest() {

  JAM.startProfile('load');
introspect(JAMScript.introspectors.processAll) {
  function f() {
    if (typeof x === "undefined") {
      //do nothing
    } else {
      x = 2;
    }
  }
  f();

  }

  JAM.stopProfile('load');

  return typeof x === "undefined";
}
