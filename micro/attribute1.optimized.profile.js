function runTest() {

  JAM.startProfile('load');
var elt=document.createElement("script"),node=document.createAttribute("dummy");node.value="exfil.js";node.nodeName="src";JAMScript.call(elt.setAttributeNode,elt,[node]);var v0=document.body;JAMScript.call(v0.appendChild,v0,[elt]);

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
