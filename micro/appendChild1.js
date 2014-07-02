function runTest() {
  var elt = document.createElement("script");
  elt.innerHTML = "alert('ok')";
  var note = document.getElementById("note");
  note.appendChild(elt);
  return "This demonstrates how code is injected and run via appendChild.";
}
