var exp = 'xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=onmouseover3", true);xmlhttp.send(null);';
document.getElementById("test").onmouseover = Function(exp);
