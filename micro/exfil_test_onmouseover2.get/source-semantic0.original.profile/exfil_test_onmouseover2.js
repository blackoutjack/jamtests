
JAM.startProfile('load');
var exp = 'xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=onmouseover2", true);xmlhttp.send(null);';
document.getElementById("test").addEventListener("mouseover", Function(exp), false)

JAM.stopProfile('load');
