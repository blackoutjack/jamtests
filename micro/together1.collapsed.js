function runTest() {
  function v0() {
    notanid();
    return
  }
  try {
    alert("OK1");
    var f = v0;
    f()
  }catch(ex) {
    console.error(ex.name + ": " + ex.message);
    introspect(JAM.policy.p1) {
      x = 2
    }
  }
  try {
    alert("OK2")
  }catch(ex$$1) {
    console.error(ex$$1.name + ": " + ex$$1.message)
  }
  ;

  return typeof x === "undefined";
}
