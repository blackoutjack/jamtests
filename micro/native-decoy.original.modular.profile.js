function runTest() {

  JAM.startProfile('load');
introspect(JAMScript.introspectors.processAll) {
  function f() {}
  document.getElementById = f;
  var elt = document.getElementById("ok");

  }

  JAM.stopProfile('load');

  return elt === undefined;
}
