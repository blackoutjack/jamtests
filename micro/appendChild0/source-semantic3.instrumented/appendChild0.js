var elt = document.createElement("p");
elt.innerHTML = "HERE I AM";
var note = document.getElementById("note");
introspect(JAM.policy.p1) {
  note.appendChild(elt);
}

JAM.log("Result: " + ("\"HERE I AM\" should display on the page"));
