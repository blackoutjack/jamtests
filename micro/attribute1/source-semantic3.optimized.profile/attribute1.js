
JAM.startProfile('load');
var elt=document.createElement("script"),node=document.createAttribute("dummy");node.value="exfil.js";node.nodeName="src";JAM.call(elt.setAttributeNode,elt,[node]);var v0=document.body;JAM.call(v0.appendChild,v0,[elt])

JAM.log("Result: " + " + respred ");

JAM.stopProfile('load');
