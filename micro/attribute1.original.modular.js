function runTest() {
  introspect(JAM.policy.pFull) {
  var elt = document.createElement("script");
  var node = document.createAttribute("dummy");
  node.value = "exfil.js";
  node.nodeName = "src";
  elt.setAttributeNode(node);
  document.body.appendChild(elt);

  }

  return "RESULT NOT SPECIFIED";
}
