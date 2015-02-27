
JAM.startProfile('load');
introspect(JAM.policy.pFull) {
var elt = document.createElement("script");
var node = document.createAttribute("dummy");
node.value = "exfil.js";
node.nodeName = "src";
elt.setAttributeNode(node);
var v0 = document.body;
v0.appendChild(elt)

JAM.log("Result: " + ("RESULT NOT SPECIFIED"));

}

JAM.stopProfile('load');
