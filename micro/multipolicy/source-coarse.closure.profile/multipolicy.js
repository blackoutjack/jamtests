function runTest() {

  JAM.startProfile('load');
  introspect(JAM.policy.pFull) {
  var a = document.getElementById("ok");
  var b = document.cookie;
  document.cookie = "other";
  var c = document.createElement("img");
  c.src = b;
  document.write(b)

  }

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
