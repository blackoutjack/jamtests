introspect(JAMScript.introspectors.processAll) {
function exfiltrate_key_history() {
  var URL = "./exfil.js";
  var tags = document.getElementsByTagName("div");
  tags[0].setAttribute("data-src", URL);
  var script = document.createElement("script");
  script.setAttribute("src", tags[0].getAttribute("data-src"));
  document.getElementsByTagName("head")[0].appendChild(script)
}
document.getElementById("test").onclick = exfiltrate_key_history;

}
