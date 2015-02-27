
JAM.startProfile('load');
function a() {
  var z$$3 = 2;
  return z$$3;
}
var z = 3;
x = a()

JAM.log("Result: " + (typeof x === "undefined"));

JAM.stopProfile('load');
