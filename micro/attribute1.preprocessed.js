function runTest() {
var elt = document.createElement("script");
  var node = document.createAttribute("dummy");
  node.value = "exfil.js";
  node.nodeName = "src";
  elt.setAttributeNode(node);
  var v0 = document.body;
  v0.appendChild(elt);

  return "RESULT NOT SPECIFIED";
}
