function runTest() {
  // called-bad.js
  var f = document;
  var x = JAM.call(f.getElementById, f, ["ok"], JAM.policy.p1)

  return typeof x === "undefined";
}
