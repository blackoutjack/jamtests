
JAM.startProfile('load');
function f() {
  return;
}
document.getElementById = f;
var elt = document.getElementById("ok")

JAM.log("Result: " + (elt === undefined));

JAM.stopProfile('load');
