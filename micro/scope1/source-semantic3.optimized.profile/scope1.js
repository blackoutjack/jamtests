function runTest() {

  JAM.startProfile('load');
  function a(){var z=2;return z}var z=3,v0=a();introspect(JAM.policy.p1)x=v0

  JAM.stopProfile('load');

  return typeof x === "undefined";
}
