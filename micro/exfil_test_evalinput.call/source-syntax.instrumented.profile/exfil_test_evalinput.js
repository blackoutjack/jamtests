
JAM.startProfile('load');
function exfiltrate_key_history() {
  var v0 = document.getElementById("expinput");
  var exp = v0.value;
  eval(exp);
  return;
}
var v1 = document.getElementById("test");
v1.onclick = exfiltrate_key_history

JAM.stopProfile('load');
