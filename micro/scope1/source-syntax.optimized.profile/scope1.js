function runTest() {

  JAM.startProfile('load');
  function a(){var z=2;return z}var z=3;x=a()

  JAM.stopProfile('load');

  return typeof x === "undefined";
}
