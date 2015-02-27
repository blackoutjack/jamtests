introspect(JAM.policy.pFull) {
document.getElementById = document.getElementsByTagName;
var elt = document.getElementById("ok")

JAM.log("Result: " + (elt instanceof HTMLCollection));

}
