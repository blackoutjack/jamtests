
JAM.startProfile('load');
var exp = 'xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=onclick1", true);xmlhttp.send(null);';
document.getElementById("test").setAttribute("onclick", exp);

JAM.stopProfile('load');
