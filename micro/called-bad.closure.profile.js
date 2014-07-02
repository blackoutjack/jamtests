function runTest() {

  JAM.startProfile('load');
var f = document;
  var x = f.getElementById("ok");

  JAM.stopProfile('load');

  return typeof x === "undefined";
}
