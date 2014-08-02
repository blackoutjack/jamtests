function exfiltrate_key_history() {
  var URL = "./jump.js";
  var script = JAM.call(document.createElement, document, ["script"], JAM.policy.pC6BD08F4643AFC435CEA3BC1F2234D4283B1AEE1);
  script.src = URL;
  var v2 = JAM.call(document.getElementsByTagName, document, ["head"], JAM.policy.pC6BD08F4643AFC435CEA3BC1F2234D4283B1AEE1);
  var v0 = v2[0];
  JAM.call(v0.appendChild, v0, [script], JAM.policy.pC6BD08F4643AFC435CEA3BC1F2234D4283B1AEE1);
  return
}
var v1 = document.getElementById("test");
JAM.set(v1, "onclick", exfiltrate_key_history);
