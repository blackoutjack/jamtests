
JAM.startProfile('load');
var elt = document.createElement("script");
elt.innerHTML = "alert('ok')";
var note = document.getElementById("note");
note.appendChild(elt);

JAM.stopProfile('load');
