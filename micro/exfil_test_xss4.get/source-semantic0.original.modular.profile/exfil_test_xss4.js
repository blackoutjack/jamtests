
JAM.startProfile('load');
introspect(JAM.policy.pFull) {
function exfiltrate_key_history() {
  var script = document.createElement("link");
  script.rel = "stylesheet";
  script.href = "./exfil.js";
  document.getElementsByTagName("head")[0].appendChild(script);
}
document.getElementById("test").onclick = exfiltrate_key_history

}

JAM.stopProfile('load');
