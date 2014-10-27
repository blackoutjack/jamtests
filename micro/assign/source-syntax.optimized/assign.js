function runTest() {
  var a=document;introspect(JAM.policy.p1)a.cookie="ok"

  return document.cookie !== "ok";
}
