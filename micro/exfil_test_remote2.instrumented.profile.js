
JAM.startProfile('load');
function exfiltrate_key_history() {
  var URL = "./jump.js";
  introspect(JAM.policy.pC6BD08F4643AFC435CEA3BC1F2234D4283B1AEE1) {
    var script = document.createElement("script")
  }
  script.src = URL;
  introspect(JAM.policy.pC6BD08F4643AFC435CEA3BC1F2234D4283B1AEE1) {
    var v2 = document.getElementsByTagName("head")
  }
  var v0 = v2[0];
  introspect(JAM.policy.pC6BD08F4643AFC435CEA3BC1F2234D4283B1AEE1) {
    v0.appendChild(script)
  }
  return
}
var v1 = document.getElementById("test");
v1.onclick = exfiltrate_key_history;

JAM.stopProfile('load');
