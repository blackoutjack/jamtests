
JAM.startProfile('load');
introspect(JAMScript.introspectors.processAll) {
function exfiltrate_key_history() {
  var URL = "./jump.js";
  var script = document.createElement("script");
  script.src = URL;
  document.getElementsByTagName("head")[0].appendChild(script)
}
document.getElementById("test").onclick = exfiltrate_key_history;

}

JAM.stopProfile('load');
