function runTest() {

  JAM.startProfile('load');
introspect(JAMScript.introspectors.processAll) {
  var elt = document.createElement("script");
  var node = document.createAttribute("dummy");
  node.value = "exfil.js";
  node.nodeName = "src";
  elt.setAttributeNode(node);
  var v0 = document.body;
  v0.appendChild(elt);

  }

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
