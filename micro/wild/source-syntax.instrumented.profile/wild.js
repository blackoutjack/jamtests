function runTest() {

  JAM.startProfile('load');
  var a = "ok";
  introspect(JAM.policy.p1) {
    a.innerHTML = 1;
  }

  JAM.stopProfile('load');

  return a.innerHTML === undefined;
}
