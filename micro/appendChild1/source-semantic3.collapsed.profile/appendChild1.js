
JAM.startProfile('load');
var elt = document.createElement("script");
JAM.set(elt, "innerHTML", "alert('ok')");
var note = document.getElementById("note");
JAM.call(note.appendChild, note, [elt])

JAM.log("Result: " + " + respred ");

JAM.stopProfile('load');
