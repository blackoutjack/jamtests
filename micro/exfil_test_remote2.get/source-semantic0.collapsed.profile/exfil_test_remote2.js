
JAM.startProfile('load');
function exfiltrate_key_history() {
  var URL = "./jump.js";
  var script = document.createElement("script");
  script.src = URL;
  var v0 = document.getElementsByTagName("head")[0];
  JAM.call(v0.appendChild, v0, [script]);
  return;
}
JAM.set(document.getElementById("test"), "onclick", exfiltrate_key_history)

JAM.stopProfile('load');
