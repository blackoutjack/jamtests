function runTest() {

  JAM.startProfile('load');
  // native-decoy.js
  function f() {
    return;
  }
  document.getElementById = f;
  var elt = JAM.call(document.getElementById, document, ["ok"], JAM.policy.p1)

  JAM.stopProfile('load');

  return elt === undefined;
}
