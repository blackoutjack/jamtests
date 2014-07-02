function runTest() {

  JAM.startProfile('load');
var s = "ok";
  if (!s.indexOf("k")) {
    x = 2
  }

  JAM.stopProfile('load');

  return typeof x === "undefined";
}
