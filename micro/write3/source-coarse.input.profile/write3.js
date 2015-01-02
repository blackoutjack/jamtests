
JAM.startProfile('load');
introspect(JAM.policy.pFull) {
document.write("<script>xmlhttp=new XMLHttpRequest(); xmlhttp.open(\"GET\", \"http://AnalyticsInc:8000/submission.html?test=baseline\", true); xmlhttp.send(null);</script>");

}

JAM.stopProfile('load');
