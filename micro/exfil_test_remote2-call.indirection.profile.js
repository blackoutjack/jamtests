
JAM.startProfile('load');
function exfiltrate_key_history() {
  var URL = "./jump.js";
  var script = JAM.call(document.createElement, document, ["script"], JAM.policy.p16);
  introspect(JAM.policy.p8) {
    script.src = URL
  }
  var v2 = JAM.call(document.getElementsByTagName, document, ["head"], JAM.policy.p16);
  var v0 = v2[0];
  JAM.call(v0.appendChild, v0, [script], JAM.policy.p17);
  return
}
var v1 = JAM.call(document.getElementById, document, ["test"], JAM.policy.p16);
JAM.set(v1, "onclick", exfiltrate_key_history);

JAM.stopProfile('load');
