function f(p) {
  alert(p);
  return;
}
function c() {
  this.m = f;
  return;
}
var o = new c;
var a = JAM.call(o.m, o, ["ok"])

JAM.log("Result: " + (a === undefined));
