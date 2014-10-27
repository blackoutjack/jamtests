function runTest() {

  JAM.startProfile('load');
  introspect(JAM.policy.pFull) {
  try {
    var f = function() {
      notanid();
    };
    alert("OK1");
    f();
  } catch (ex) {
    console.error(ex.name + ": " + ex.message);
  }
  try {
    alert("OK2");
  } catch (ex$$1) {
    console.error(ex$$1.name + ": " + ex$$1.message);
  }

  }

  JAM.stopProfile('load');

  return "\"OK1\" and \"OK2\" should be alerted";
}
