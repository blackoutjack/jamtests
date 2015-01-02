
JAM.startProfile('load');
var exp = 'xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=onmouseover1", true);xmlhttp.send(null);';
document.getElementById("test").setAttribute("onmouseover", exp)

JAM.stopProfile('load');
