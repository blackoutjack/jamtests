function v0() {
  xmlhttp = new XMLHttpRequest;
  xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=onclick3", true);
  xmlhttp.send(null);
  return
}
var v1 = document.getElementById("test");
v1.addEventListener("click", v0, false);
