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
    console.error(ex.name + ": " + ex.message)
  }
  try {
    alert("OK2")
  }catch(ex$$1) {
    console.error(ex$$1.name + ": " + ex$$1.message)
  }
  ;

  return "\"OK1\" and \"OK2\" should be alerted";
}
