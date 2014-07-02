function runTest() {
introspect(JAMScript.introspectors.processAll) {
  function f() {
    this.setter = function() {
      x = 2;
    }
  }
  function g() {
    this.setter = function() {
      x = 2;
    }
  }

  }

  return "No state to inspect";
}
