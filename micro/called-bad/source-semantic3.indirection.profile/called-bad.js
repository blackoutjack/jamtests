function runTest() {

  JAM.startProfile('load');
  var f = document;
  var x = JAM.call(f.getElementById, f, ["ok"], JAM.policy.p1)

  JAM.stopProfile('load');

  return typeof x === "undefined";
}
