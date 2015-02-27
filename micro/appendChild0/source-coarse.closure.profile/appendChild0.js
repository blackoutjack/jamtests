
JAM.startProfile('load');
introspect(JAM.policy.pFull) {
var elt = document.createElement("p");
elt.innerHTML = "HERE I AM";
var note = document.getElementById("note");
note.appendChild(elt)

JAM.log("Result: " + ("\"HERE I AM\" should display on the page"));

}

JAM.stopProfile('load');
