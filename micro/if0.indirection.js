function runTest() {
  var s = "ok";
  var v1 = s.indexOf("k");
  var v0 = !v1;
  if(v0) {
    introspect(JAM.policy.p1) {
      x = 2
    }
  }
  ;

  return typeof x === "undefined";
}
