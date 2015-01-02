
JAM.startProfile('load');
function runTest() {
  document.write('<script>xmlhttp=new XMLHttpRequest(); xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=baseline", true); xmlhttp.send(null);\x3c/script>')

  return "RESULT NOT SPECIFIED";
}

JAM.stopProfile('load');
