introspect(JAM.policy.pFull) {
document.getElementsByTagName = document.getElementById;
var elt = document.getElementsByTagName("ok")

JAM.log("Result: " + ("Expect an exception"));

}
