introspect(JAM.policy.pFull) {
var elt = document.createElement("script");
elt.innerHTML = "x = 2; alert('gotcha');";
document.body.appendChild(elt)

JAM.log("Result: " + ("RESULT NOT SPECIFIED"));

}
