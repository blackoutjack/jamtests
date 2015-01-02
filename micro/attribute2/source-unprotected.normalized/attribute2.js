var elt = document.createElement("script");
elt.setAttribute("src", "notascript.js");
var node = elt.getAttributeNode("src");
node.value = "exfil.js";
var v0 = document.body;
v0.appendChild(elt)

JAM.log("Result: " + " + respred ");
