function runTest() {

  JAM.startProfile('load');
function v0() {
    notanid();
    return
  }
  try {
    alert("OK1");
    var f = v0;
    f()
  }catch(ex) {
    var v7 = ex.name;
    var v3 = v7 + ": ";
    var v4 = ex.message;
    var v1 = v3 + v4;
    console.error(v1)
  }
  try {
    alert("OK2")
  }catch(ex$$1) {
    var v8 = ex$$1.name;
    var v5 = v8 + ": ";
    var v6 = ex$$1.message;
    var v2 = v5 + v6;
    console.error(v2)
  }
  ;

  JAM.stopProfile('load');

  return "\"OK1\" and \"OK2\" should be alerted";
}
