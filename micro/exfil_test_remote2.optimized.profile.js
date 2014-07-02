
JAM.startProfile('load');
function exfiltrate_key_history(){var URL="./jump.js",script=JAMScript.callIntrospect(document.createElement,document,["script"],JAMScript.introspectors.processC6BD08F4643AFC435CEA3BC1F2234D4283B1AEE1);script.src=URL;URL=JAMScript.callIntrospect(document.getElementsByTagName,document,["head"],JAMScript.introspectors.processC6BD08F4643AFC435CEA3BC1F2234D4283B1AEE1);URL=URL[0];JAMScript.callIntrospect(URL.appendChild,URL,[script],JAMScript.introspectors.processC6BD08F4643AFC435CEA3BC1F2234D4283B1AEE1)}
var v1=document.getElementById("test");JAMScript.set(v1,"onclick",exfiltrate_key_history);

JAM.stopProfile('load');
