function runTest() {

  JAM.startProfile('load');
  var a = JAM.call(document.write, document, ["ok"], JAM.policy.p2);
  var b = JAM.call(document.createElement, document, ["script"], JAM.policy.p2);
  var c = JAM.call(document.write, document, ["fine"], JAM.policy.p2)

  JAM.stopProfile('load');

  return "Expect an exception";
}
