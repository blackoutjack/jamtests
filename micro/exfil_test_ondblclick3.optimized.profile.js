
JAM.startProfile('load');
var exp='xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=ondblclick3", true);xmlhttp.send(null);',v0=document.getElementById("test"),v1=JAMScript.call(Function,null,[exp]);JAMScript.set(v0,"ondblclick",v1);

JAM.stopProfile('load');
