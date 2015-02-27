
JAM.startProfile('load');
introspect(JAM.policy.pFull) {
function f() {
}
document.getElementById = f;
var elt = document.getElementById("ok")

JAM.log("Result: " + (elt === undefined));

}

JAM.stopProfile('load');
