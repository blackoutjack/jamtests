
JAM.startProfile('load');
function f() {
  eval("String.prototype.indexOf = String.prototype.toLowerCase;");
  var v = "OK".indexOf("K");
  return v;
}
x = f()

JAM.log("Result: " + (x === "ok"));

JAM.stopProfile('load');
