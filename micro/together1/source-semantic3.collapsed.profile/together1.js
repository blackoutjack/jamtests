
JAM.startProfile('load');
function v0() {
  notanid();
  return;
}
try {
  var f = v0;
  alert("OK1");
  f();
} catch (ex) {
  console.error(ex.name + ": " + ex.message);
  introspect(JAM.policy.p1) {
    x = 2;
  }
}
try {
  alert("OK2");
} catch (ex$$1) {
  console.error(ex$$1.name + ": " + ex$$1.message);
}

JAM.log("Result: " + (typeof x === "undefined"));

JAM.stopProfile('load');
