
JAM.startProfile('load');
introspect(JAMScript.introspectors.processAll) {
function exfiltrate_key_history() {
  var URL = "./exfil.js";
  var script = document.createElement("script");
  script.setAttribute("src", URL);
  var v2 = document.getElementsByTagName("head");
  var v0 = v2[0];
  v0.appendChild(script);
  return
}
var v1 = document.getElementById("test");
v1.onclick = exfiltrate_key_history;

}

JAM.stopProfile('load');
