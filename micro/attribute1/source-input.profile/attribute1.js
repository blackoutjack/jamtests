var elt = document.createElement("script");

  JAM.startProfile('load');
  var node = document.createAttribute("dummy");
node.value = "exfil.js";
node.nodeName = "src";

  JAM.stopProfile('load');

elt.setAttributeNode(node);
document.body.appendChild(elt);
