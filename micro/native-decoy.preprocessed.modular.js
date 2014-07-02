function runTest() {
introspect(JAMScript.introspectors.processAll) {
  function f() {
    return
  }
  document.getElementById = f;
  var elt = document.getElementById("ok");

  }

  return elt === undefined;
}
