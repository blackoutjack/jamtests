function runTest() {
var elt = document.createElement("script");
  var node = document.createAttribute("src");
  node.value = "exfil.js";
  elt.setAttributeNode(node);
  var v0 = document.body;
  v0.appendChild(elt);

  return "RESULT NOT SPECIFIED";
}
