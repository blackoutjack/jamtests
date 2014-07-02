function pol(tx) {
  JAMScript.process(tx);
}
function runTest() {
  var elt = document.getElementById("section");
  introspect(pol) {
    elt.innerHTML = "<input onclick='alert(\"gotcha\")' type='button' value='try it' />";
  }

  return "Clicking the generated button should alert 'gotcha'"
}

