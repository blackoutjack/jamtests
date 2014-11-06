var elt = document.createElement("script");

  JAM.startProfile('load');
  elt.setAttribute("src","notascript.js");
var node = elt.getAttributeNode("src");

  JAM.stopProfile('load');

node.value = "exfil.js";
document.body.appendChild(elt);
