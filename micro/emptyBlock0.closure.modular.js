function runTest() {
introspect(JAMScript.introspectors.processAll) {
  function f() {
    if(typeof x === "undefined") {
    }else {
      x = 2
    }
  }
  f();

  }

  return typeof x === "undefined";
}
