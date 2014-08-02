function runTest() {

  JAM.startProfile('load');
  var a = document.write("ok");
  var b = document.createElement("script");
  var c = document.write("fine");

  JAM.stopProfile('load');

  return "Expect an exception";
}
