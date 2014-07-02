function runTest() {
var f = JAMScript.new(Function, ["x = 2"]);
  JAMScript.call(f, null, []);

  return typeof x === "undefined";
}
