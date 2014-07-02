function runTest() {
introspect(JAMScript.introspectors.processAll) {
  try {
    alert("OK1");
    var f = function() {
      notanid()
    };
    f()
  }catch(ex) {
    console.error(ex.name + ": " + ex.message);
    x = 2
  }
  try {
    alert("OK2")
  }catch(ex$$1) {
    console.error(ex$$1.name + ": " + ex$$1.message)
  }
  ;
  }

  return typeof x === "undefined";
}
