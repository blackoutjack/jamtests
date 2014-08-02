function v0() {
  xmlhttp = new XMLHttpRequest;
  JAM.call(JAM.get(xmlhttp, "open", JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074), xmlhttp, ["GET", "http://AnalyticsInc:8000/submission.html?test=onclick3", true]);
  xmlhttp.send(null);
  return
}
var v1 = document.getElementById("test");
v1.addEventListener("click", v0, false);
