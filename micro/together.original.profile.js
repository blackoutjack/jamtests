function runTest() {

  JAM.startProfile('load');
  try {
  alert("OK1");
  function f() {
    notanid();
  }
  f();
  } catch (ex) {
    console.error(ex.name + ": " + ex.message);
  }
  
  try {
  alert("OK2");
  } catch (ex) {
    console.error(ex.name + ": " + ex.message);
  }

  JAM.stopProfile('load');

  return "\"OK1\" and \"OK2\" should be alerted";
}
