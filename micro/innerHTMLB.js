function pol(tx) {
  tx.commit();
  if (tx.isSuspended()) {
    alert("No new text should be displayed in the document yet");
    JAMScript.performAction(tx);
    alert("Now the document should display \"HERE I AM\"");
  }
}
function runTest() {
  var elt = document.getElementById("note");
  introspect(pol) {
      elt.innerHTML = "HERE I AM";
  }
}
