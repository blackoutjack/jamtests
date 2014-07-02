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
    x = 2;
  }
  
  try {
  alert("OK2");
  } catch (ex) {
    console.error(ex.name + ": " + ex.message);
  }

  JAM.stopProfile('load');

  return typeof x === "undefined";
}
