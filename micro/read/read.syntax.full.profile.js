function runTest() {

  JAM.startProfile('load');
  // read.js
  var a = document;
  introspect(JAM.policy.p1) {
    var b = a.cookie
  }

  JAM.stopProfile('load');

  return b === undefined;
}
