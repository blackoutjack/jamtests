
JAM.startProfile('load');
introspect(JAM.policy.pFull) {
var elt = document.createElement("script");
elt.innerHTML = "alert('ok')";
var note = document.getElementById("note");
note.appendChild(elt)

JAM.log("Result: " + ("\"ok\" should be alerted (demonstrating how code is injected and run via appendChild)"));

}

JAM.stopProfile('load');
