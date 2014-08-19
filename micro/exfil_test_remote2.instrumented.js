function exfiltrate_key_history() {
  var URL = "./jump.js";
  introspect(JAM.policy.p1) {
    var script = document.createElement("script")
  }
  script.src = URL;
  introspect(JAM.policy.p1) {
    var v2 = document.getElementsByTagName("head")
  }
  var v0 = v2[0];
  introspect(JAM.policy.p1) {
    v0.appendChild(script)
  }
  return
}
var v1 = document.getElementById("test");
v1.onclick = exfiltrate_key_history;
