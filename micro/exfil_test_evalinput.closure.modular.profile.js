
JAM.startProfile('load');
introspect(JAMScript.introspectors.processAll) {
function exfiltrate_key_history() {
  var exp = document.getElementById("expinput").value;
  eval(exp)
}
document.getElementById("test").onclick = exfiltrate_key_history;

}

JAM.stopProfile('load');
