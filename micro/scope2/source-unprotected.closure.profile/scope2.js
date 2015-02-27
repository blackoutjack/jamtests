
JAM.startProfile('load');
function f(p) {
  alert(p);
}
function c() {
  this.m = f;
}
var o = new c;
var a = o.m("ok")

JAM.log("Result: " + (a === undefined));

JAM.stopProfile('load');
