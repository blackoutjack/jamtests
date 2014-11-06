var elt = document.createElement("script");
  introspect(JAM.policy.pFull) {
  elt.setAttribute("src","notascript.js");
var node = elt.getAttributeNode("src");

  }

node.value = "exfil.js";
document.body.appendChild(elt);
