function runTest() {
  function a(){var z=2;return z}var z=3;x=a();

  return typeof x === "undefined";
}
