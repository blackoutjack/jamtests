function exfiltrate_key_history() {
  var URL = "./exfil.js";
  introspect(JAM.policy.p8) {
    var script = document.createElement("script")
  }
  introspect(JAM.policy.p16) {
    script.setAttribute("src", URL)
  }
  introspect(JAM.policy.p8) {
    var v2 = document.getElementsByTagName("head")
  }
  var v0 = v2[0];
  introspect(JAM.policy.p17) {
    v0.appendChild(script)
  }
  return
}
introspect(JAM.policy.p8) {
  var v1 = document.getElementById("test")
}
v1.onclick = exfiltrate_key_history;
