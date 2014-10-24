function exfiltrate_key_history() {
  var v0 = document.getElementById("expinput");
  var exp = v0.value;
  if (JAM.isEval(eval)) {
    eval("introspect(JAM.policy.pFull) { " + exp + " }");
  } else {
    JAM.call(eval, null, [exp]);
  }
  return;
}
var v1 = document.getElementById("test");
JAM.set(v1, "onclick", exfiltrate_key_history)
