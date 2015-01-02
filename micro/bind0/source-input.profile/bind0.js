
JAM.startProfile('load');
function f() {
  return this.indexOf("k");
}
var g = f.bind("ok");
var v = g();

JAM.stopProfile('load');
