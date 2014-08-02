introspect(JAM.policy.pFull) {
function exfiltrate_key_history() {
  var exp = document.getElementById("expinput").value;
  eval(exp)
}
document.getElementById("test").onclick = exfiltrate_key_history;

}
