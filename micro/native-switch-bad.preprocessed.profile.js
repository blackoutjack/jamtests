function runTest() {

  JAM.startProfile('load');
  document.getElementsByTagName = document.getElementById;
  var elt = document.getElementsByTagName("ok");

  JAM.stopProfile('load');

  return "Expect an exception";
}
