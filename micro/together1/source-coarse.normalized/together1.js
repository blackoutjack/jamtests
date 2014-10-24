function runTest() {
  introspect(JAM.policy.pFull) {
  function v0() {
    notanid();
    return;
  }
  try {
    var f = v0;
    alert("OK1");
    f();
  } catch (ex) {
    var v7 = ex.name;
    var v3 = v7 + ": ";
    var v4 = ex.message;
    var v1 = v3 + v4;
    console.error(v1);
    x = 2;
  }
  try {
    alert("OK2");
  } catch (ex$$1) {
    var v8 = ex$$1.name;
    var v5 = v8 + ": ";
    var v6 = ex$$1.message;
    var v2 = v5 + v6;
    console.error(v2);
  }

  }

  return "RESULT NOT SPECIFIED";
}
