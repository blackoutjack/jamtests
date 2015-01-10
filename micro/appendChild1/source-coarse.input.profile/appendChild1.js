
JAM.startProfile('load');
introspect(JAM.policy.pFull) {
var elt = document.createElement("script");
elt.innerHTML = "alert('ok')";
var note = document.getElementById("note");
note.appendChild(elt);

}

JAM.stopProfile('load');
