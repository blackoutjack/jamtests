function runTest() {

  JAM.startProfile('load');
document.write('<script>xmlhttp=new XMLHttpRequest(); xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=baseline", true); xmlhttp.send(null);\x3c/script>');

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
