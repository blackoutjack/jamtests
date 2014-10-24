function runTest() {

  JAM.startProfile('load');
  var a = document.getElementById("ok");
  var b = document.cookie;
  document.cookie = "other";
  var c = document.createElement("img");
  c.src = b;
  document.write(b)

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
