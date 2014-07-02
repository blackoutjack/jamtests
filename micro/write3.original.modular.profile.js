function runTest() {

  JAM.startProfile('load');
introspect(JAMScript.introspectors.processAll) {
  document.write("<script>xmlhttp=new XMLHttpRequest(); xmlhttp.open(\"GET\", \"http://AnalyticsInc:8000/submission.html?test=baseline\", true); xmlhttp.send(null);</script>");

  }

  JAM.stopProfile('load');

  return "RESULT NOT SPECIFIED";
}
