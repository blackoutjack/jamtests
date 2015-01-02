
JAM.startProfile('load');
function O() {
  this.a = 1;
  this.b = 2;
  return;
}
var p = {c:3};
var x = 9;
O.prototype = p;
var o = new O;
with(o) {
  var d = a;
  var e = c;
  var f = x;
}
var v4 = "d: " + d;
var v3 = v4 + " e: ";
var v2 = v3 + e;
var v1 = v2 + " f: ";
var v0 = v1 + f;
print(v0)

JAM.log("Result: " + " + respred ");

JAM.stopProfile('load');
