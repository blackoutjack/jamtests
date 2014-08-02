function runTest() {
  introspect(JAM.policy.pFull) {
  var elt = document.createElement("script");
  var node = document.createAttribute("src");
  node.value = "exfil.js";
  elt.setAttributeNode(node);
  document.body.appendChild(elt);

  }

  return "RESULT NOT SPECIFIED";
}
