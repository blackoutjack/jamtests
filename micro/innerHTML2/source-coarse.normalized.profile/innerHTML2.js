
JAM.startProfile('load');
introspect(JAM.policy.pFull) {
var elt = document.createElement("script");
elt.innerHTML = "x = 2; alert('gotcha');";
var v0 = document.body;
v0.appendChild(elt)

JAM.log("Result: " + ("RESULT NOT SPECIFIED"));

}

JAM.stopProfile('load');
