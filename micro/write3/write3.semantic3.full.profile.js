function runTest() {

  JAM.startProfile('load');
  // write3.js
  JAM.call(document.write, document, ['<script>xmlhttp=new XMLHttpRequest(); xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=baseline", true); xmlhttp.send(null);\x3c/script>'])

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
