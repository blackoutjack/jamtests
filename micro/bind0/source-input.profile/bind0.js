function f() {

  JAM.startProfile('load');
  return this.indexOf("k");
}

  JAM.stopProfile('load');

var g = f.bind("ok");
var v = g();
