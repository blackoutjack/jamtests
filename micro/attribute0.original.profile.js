function runTest() {

  JAM.startProfile('load');
  var elt = document.createElement("script");
  var node = document.createAttribute("src");
  node.value = "exfil.js";
  elt.setAttributeNode(node);
  document.body.appendChild(elt);

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
