function runTest() {
  function f() {
    return
  }
  document.getElementById = f;
  var elt = JAM.call(document.getElementById, document, ["ok"]);

  return elt === undefined;
}
