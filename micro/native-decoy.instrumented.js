function runTest() {
function f() {
    return
  }
  document.getElementById = f;
  var elt = document.getElementById("ok");

  return elt === undefined;
}
