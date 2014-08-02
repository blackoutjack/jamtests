function runTest() {
  x=JAM.call(Math.floor,Math,[4*Math.random()]);

  return typeof x === "undefined" || x !== 2;
}
