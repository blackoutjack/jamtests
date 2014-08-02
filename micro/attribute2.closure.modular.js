function runTest() {
  introspect(JAM.policy.pFull) {
  var elt = document.createElement("script");
  elt.setAttribute("src", "notascript.js");
  var node = elt.getAttributeNode("src");
  node.value = "exfil.js";
  document.body.appendChild(elt);

  }

  return "RESULT NOT SPECIFIED";
}
