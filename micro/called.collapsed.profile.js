function runTest() {

  JAM.startProfile('load');
  var f = document;
  var x = JAM.call(f.getElementsByTagName, f, ["ok"], JAM.policy.p1);

  JAM.stopProfile('load');

  return x instanceof HTMLCollection;
}
