
JAM.startProfile('load');
introspect(JAM.policy.pFull) {
function exfiltrate_key_history() {
  var URL = "./exfil.jpg";
  var script = document.createElement("script");
  script.src = URL;
  document.getElementsByTagName("head")[0].appendChild(script)
}
document.getElementById("test").onclick = exfiltrate_key_history;

}

JAM.stopProfile('load');
