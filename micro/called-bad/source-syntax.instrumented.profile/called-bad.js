function runTest() {

  JAM.startProfile('load');
  var f = document;
  introspect(JAM.policy.p1) {
    var x = f.getElementById("ok")
  }

  JAM.stopProfile('load');

  return typeof x === "undefined";
}
