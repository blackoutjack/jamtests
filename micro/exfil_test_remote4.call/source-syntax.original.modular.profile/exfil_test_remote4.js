
JAM.startProfile('load');
introspect(JAM.policy.pFull) {
function exfiltrate_key_history() {
  var URL = "./exfil.js";
  var tags = document.getElementsByTagName("div");
  tags[0].setAttribute("data-src", URL);
  var script = document.createElement("script");
  script.src = tags[0].dataset.src;
  document.getElementsByTagName("head")[0].appendChild(script);
}
document.getElementById("test").onclick = exfiltrate_key_history

}

JAM.stopProfile('load');
