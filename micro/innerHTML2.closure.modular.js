function runTest() {
introspect(JAMScript.introspectors.processAll) {
  var elt = document.createElement("script");
  elt.innerHTML = "x = 2; alert('gotcha');";
  document.body.appendChild(elt);

  }

  return "RESULT NOT SPECIFIED";
}
