var elt = document.createElement("script");
  introspect(JAM.policy.pFull) {
  var node = document.createAttribute("dummy");
node.value = "exfil.js";
node.nodeName = "src";

  }

elt.setAttributeNode(node);
document.body.appendChild(elt);
