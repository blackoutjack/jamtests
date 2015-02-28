// appendChild1.js
var elt = document.createElement("script");
JAM.set(elt, "innerHTML", "alert('ok')");
var note = document.getElementById("note");
JAM.call(note.appendChild, note, [elt])