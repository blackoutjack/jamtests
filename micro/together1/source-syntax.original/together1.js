function runTest() {
  try {
    var f = function() {
      notanid();
    };
    alert("OK1");
    f();
  } catch (ex) {
    console.error(ex.name + ": " + ex.message);
    x = 2;
  }
  try {
    alert("OK2");
  } catch (ex$$1) {
    console.error(ex$$1.name + ": " + ex$$1.message);
  }

  return "RESULT NOT SPECIFIED";
}
