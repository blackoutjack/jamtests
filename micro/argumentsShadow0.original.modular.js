function runTest() {
introspect(JAMScript.introspectors.processAll) {
  function f(arguments, other) {
    var v = arguments[1];
    return v;
  }
  var a = new Array(10, 11);
  var r = f(a, 12);
  alert(r);

  }

  return "RESULT NOT SPECIFIED";
}
