function f() {
  return this.indexOf("k");
}
var g = JAM.call(f.bind, f, ["ok"]);
var v = g()

JAM.log("Result: " + " + respred ");
