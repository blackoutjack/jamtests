
JAM.startProfile('load');
function exfiltrate_key_history() {
  var URL = "./jump.js";
  introspect(JAM.policy.p16) {
    var script = document.createElement("script")
  }
  introspect(JAM.policy.p8) {
    script.src = URL
  }
  introspect(JAM.policy.p16) {
    var v2 = document.getElementsByTagName("head")
  }
  var v0 = v2[0];
  introspect(JAM.policy.p17) {
    v0.appendChild(script)
  }
  return
}
introspect(JAM.policy.p16) {
  var v1 = document.getElementById("test")
}
v1.onclick = exfiltrate_key_history;

JAM.stopProfile('load');
