
JAM.startProfile('load');
function v3(callback,target,ports,timeout){index=0;for(var v6=index<ports.length;v6;)v6=AttackAPI.PortScanner,JAM.call(v6.scanPort,v6,[callback,target,ports[index],timeout]),index+=1,v6=index<ports.length}
function v2(callback,target,port,timeout){function v1(){img&&(img=void 0,JAM.call(callback,null,[target,port,"closed"]))}function v0(){img&&(img=void 0,JAM.call(callback,null,[target,port,"open"]))}timeout=null==timeout?100:timeout;var img=new Image;JAM.set(img,"onerror",v0);JAM.set(img,"onload",img.onerror);var v10="http://"+target+":";introspect(JAM.policy.p1)img.src=v10+port;JAM.call(setTimeout,null,[v1,timeout])}function cb(tgt,p,res){console.log(tgt+":"+p+" "+res)}
var AttackAPI={version:"0.1",author:"Petko Petkov (architect)",homepage:"http://www.gnucitizen.org",PortScanner:{}};AttackAPI.PortScanner.scanPort=v2;AttackAPI.PortScanner.scanTarget=v3;var v14=AttackAPI.PortScanner;JAM.call(v14.scanTarget,v14,[cb,"localhost",[20,21,22,23,24,100,101,102,103],1E3]);

JAM.stopProfile('load');
