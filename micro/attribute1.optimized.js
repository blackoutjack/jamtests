function runTest() {
var elt=document.createElement("script"),node=document.createAttribute("dummy");node.value="exfil.js";node.nodeName="src";JAMScript.call(elt.setAttributeNode,elt,[node]);var v0=document.body;JAMScript.call(v0.appendChild,v0,[elt]);

  return "RESULT NOT SPECIFIED";
}
