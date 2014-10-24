function runTest() {

  JAM.startProfile('load');
  // called-bad.js
  var f = document;
  var x = JAM.call(f.getElementById, f, ["ok"], JAM.policy.p1)

  JAM.stopProfile('load');

  return typeof x === "undefined";
}
