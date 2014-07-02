function runTest() {

  JAM.startProfile('load');
function f() {
    return
  }
  document.getElementById = f;
  var elt = document.getElementById("ok");

  JAM.stopProfile('load');

  return elt === undefined;
}
