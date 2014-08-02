function runTest() {
  var f = JAM.new(Function, ["x = 2"]);
  f();

  return typeof x === "undefined";
}
