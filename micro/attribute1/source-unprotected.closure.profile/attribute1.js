function runTest() {

  JAM.startProfile('load');
  var elt = document.createElement("script");
  var node = document.createAttribute("dummy");
  node.value = "exfil.js";
  node.nodeName = "src";
  elt.setAttributeNode(node);
  document.body.appendChild(elt)

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
