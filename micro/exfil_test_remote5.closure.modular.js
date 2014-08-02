introspect(JAM.policy.pFull) {
function exfiltrate_key_history() {
  var URL = "./exfil.js";
  var script = document.createElement("script");
  script.src = URL;
  document.getElementsByTagName("head")[0].appendChild(script)
}
document.getElementById("test").onclick = exfiltrate_key_history;

}
