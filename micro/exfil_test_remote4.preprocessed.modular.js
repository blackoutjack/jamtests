introspect(JAMScript.introspectors.processAll) {
function exfiltrate_key_history() {
  var URL = "./exfil.js";
  var tags = document.getElementsByTagName("div");
  var v0 = tags[0];
  v0.setAttribute("data-src", URL);
  var script = document.createElement("script");
  var v4 = tags[0];
  var v1 = v4.dataset;
  script.src = v1.src;
  var v5 = document.getElementsByTagName("head");
  var v2 = v5[0];
  v2.appendChild(script);
  return
}
var v3 = document.getElementById("test");
v3.onclick = exfiltrate_key_history;

}
