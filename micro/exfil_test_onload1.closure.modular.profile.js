
JAM.startProfile('load');
introspect(JAMScript.introspectors.processAll) {
var exp = 'xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=onload1", true);xmlhttp.send(null);';
document.body.setAttribute("onload", exp);

}

JAM.stopProfile('load');
