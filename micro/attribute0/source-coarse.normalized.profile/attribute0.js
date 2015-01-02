
JAM.startProfile('load');
introspect(JAM.policy.pFull) {
var elt = document.createElement("script");
var node = document.createAttribute("src");
node.value = "exfil.js";
elt.setAttributeNode(node);
var v0 = document.body;
v0.appendChild(elt)

JAM.log("Result: " + " + respred ");

}

JAM.stopProfile('load');
