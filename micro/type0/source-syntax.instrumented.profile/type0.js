
JAM.startProfile('load');
function runTest() {
  var a = "ok";
  var b = "k";
  introspect(JAM.policy.p1) {
    var c = a.indexOf(b)
  }
  introspect(JAM.policy.p1) {
    alert(c);
  }

  return "RESULT NOT SPECIFIED";
}

JAM.stopProfile('load');
