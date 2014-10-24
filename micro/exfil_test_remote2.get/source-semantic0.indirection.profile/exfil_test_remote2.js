
JAM.startProfile('load');
function exfiltrate_key_history() {
  var URL = "./jump.js";
  var script = document.createElement("script");
  script.src = URL;
  var v2 = document.getElementsByTagName("head");
  var v0 = v2[0];
  JAM.call(v0.appendChild, v0, [script]);
  return;
}
var v1 = document.getElementById("test");
JAM.set(v1, "onclick", exfiltrate_key_history)

JAM.stopProfile('load');
