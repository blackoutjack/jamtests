function runTest() {

  JAM.startProfile('load');
  function f() {
  }
  document.getElementById = f;
  var elt = document.getElementById("ok")

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
