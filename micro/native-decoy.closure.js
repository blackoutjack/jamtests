function runTest() {
function f() {
  }
  document.getElementById = f;
  var elt = document.getElementById("ok");

  return elt === undefined;
}
