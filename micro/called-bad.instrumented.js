function runTest() {
  var f = document;
  introspect(JAM.policy.p1) {
    var x = f.getElementById("ok")
  }
  ;

  return typeof x === "undefined";
}
