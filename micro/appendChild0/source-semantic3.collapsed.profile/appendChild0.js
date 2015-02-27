
JAM.startProfile('load');
var elt = document.createElement("p");
JAM.set(elt, "innerHTML", "HERE I AM");
var note = document.getElementById("note");
JAM.call(note.appendChild, note, [elt], JAM.policy.p1)

JAM.log("Result: " + ("\"HERE I AM\" should display on the page"));

JAM.stopProfile('load');
