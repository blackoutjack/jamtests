function runTest() {

  JAM.startProfile('load');
  var v1 = Math.random();
  var v0 = v1 * 4;
  x = JAM.call(Math.floor, Math, [v0])

  JAM.stopProfile('load');

  return typeof x === "undefined" || x !== 2;
}
