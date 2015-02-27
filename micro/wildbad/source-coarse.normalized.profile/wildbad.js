
JAM.startProfile('load');
introspect(JAM.policy.pFull) {
var a = document.getElementById("ok");
a.innerHTML = 1

JAM.log("Result: " + (a.innerHTML === "THIS SHOULD REMAIN"));

}

JAM.stopProfile('load');
