function runTest() {

  JAM.startProfile('load');
introspect(JAMScript.introspectors.processAll) {
  function f(arguments, other) {
    var v = arguments[1];
    return v;
  }
  var a = new Array(10, 11);
  var r = f(a, 12);
  alert(r);

  }

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
