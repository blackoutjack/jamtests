
JAM.startProfile('load');
function exfiltrate_key_history() {
  var script = document.createElement("link");
  script.rel = "stylesheet";
  script.href = "./exfil.js";
  var v2 = document.getElementsByTagName("head");
  var v0 = v2[0];
  v0.appendChild(script);
  return;
}
var v1 = document.getElementById("test");
v1.onclick = exfiltrate_key_history

JAM.stopProfile('load');
