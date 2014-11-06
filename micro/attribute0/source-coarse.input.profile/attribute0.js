var elt = document.createElement("script");

  JAM.startProfile('load');
  introspect(JAM.policy.pFull) {
  var node = document.createAttribute("src");
node.value = "exfil.js";

  }

  JAM.stopProfile('load');

elt.setAttributeNode(node);
document.body.appendChild(elt);
