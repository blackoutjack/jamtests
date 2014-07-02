function pol(tx) {
  if (tx.isSuspended()) {
    alert("No new text should be displayed in the document yet");
    JAMScript.performAction(tx);
    alert("Now the document should display \"HERE I AM\"");
  }
  tx.commit();
}
function runTest() {
  var elt = document.createElement("p");
  elt.innerHTML = "HERE I AM";
  var note = document.getElementById("note");
  introspect(pol) {
    note.appendChild(elt);
  }
  return "The 2 messages should be shown twice, because the getter triggers a suspend also.";
}
