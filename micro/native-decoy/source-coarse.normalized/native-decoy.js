introspect(JAM.policy.pFull) {
function f() {
  return;
}
document.getElementById = f;
var elt = document.getElementById("ok")

JAM.log("Result: " + " + respred ");

}
