
JAM.startProfile('load');
var exp='xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=ondblclick1", true);xmlhttp.send(null);',v0=document.getElementById("test");JAMScript.call(v0.setAttribute,v0,["ondblclick",exp]);

JAM.stopProfile('load');
