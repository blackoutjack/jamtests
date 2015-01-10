
JAM.startProfile('load');
var elt = document.createElement("p");
elt.innerHTML = "HERE I AM";
var note = document.getElementById("note");
note.appendChild(elt)

JAM.log("Result: " + " + respred ");

JAM.stopProfile('load');
