
JAM.startProfile('load');
function f() {
  return;
}
document.getElementById = f;
var elt = JAM.call(document.getElementById, document, ["ok"])

JAM.log("Result: " + " + respred ");

JAM.stopProfile('load');
