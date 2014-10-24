
JAM.startProfile('load');
var exp = 'xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=onfocus2", true);xmlhttp.send(null);';
document.getElementById("test").addEventListener("focus", Function(exp), false)

JAM.stopProfile('load');
