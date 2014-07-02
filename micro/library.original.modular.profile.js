function runTest() {

  JAM.startProfile('load');
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

  JAM.stopProfile('load');

  return "No state to inspect";
}
