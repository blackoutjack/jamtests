function runTest() {

  JAM.startProfile('load');
  introspect(JAM.policy.pFull) {
  var a = {get ok() {
    return"ok"
  }};
  alert(a.ok);

  }

  JAM.stopProfile('load');

  return a.ok === "ok";
}
