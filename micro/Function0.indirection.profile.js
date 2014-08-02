function runTest() {

  JAM.startProfile('load');
  var f = JAM.new(Function, ["x = 2"]);
  f();

  JAM.stopProfile('load');

  return typeof x === "undefined";
}
