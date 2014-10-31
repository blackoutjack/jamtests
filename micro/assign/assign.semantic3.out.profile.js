function runTest() {

  JAM.startProfile('load');
  // assign.js
  var a = document;
  introspect(JAM.policy.p1) {
    a.cookie = "ok";
  }

  JAM.stopProfile('load');

  return document.cookie !== "ok";
}
