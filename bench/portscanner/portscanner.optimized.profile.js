
JAM.startProfile('load');
function v3(callback,target,ports,timeout){index=0;for(var v17=ports.length,v17=index<v17;v17;){var v17=AttackAPI.PortScanner,v5=ports[index];JAMScript.call(v17.scanPort,v17,[callback,target,v5,timeout]);index+=1;v17=ports.length;v17=index<v17}}
function v2(callback,target,port,timeout){function v1(){var v7=!img;v7||(img=void 0,JAMScript.call(callback,null,[target,port,"closed"]))}function v0(){var v8=!img;v8||(img=void 0,JAMScript.call(callback,null,[target,port,"open"]))}var v19=null==timeout;timeout=v19?100:timeout;var img=new Image;JAMScript.set(img,"onerror",v0);v19=img;JAMScript.set(v19,"onload",img.onerror);v19="http://"+target;v19+=":";introspect(JAMScript.introspectors.process8A9400208C24F3EAF9195E429B8E1C6C4C412B95)img.src=v19+
port;JAMScript.call(setTimeout,null,[v1,timeout])}function cb(tgt,p,res){tgt+=":";p=tgt+p;p+=" ";res=p+res;console.log(res)}var AttackAPI={version:"0.1",author:"Petko Petkov (architect)",homepage:"http://www.gnucitizen.org",PortScanner:{}},v13=AttackAPI.PortScanner;v13.scanPort=v2;var v14=AttackAPI.PortScanner;v14.scanTarget=v3;var v15=AttackAPI.PortScanner,v16=[20,21,22,23,24,100,101,102,103];JAMScript.call(v15.scanTarget,v15,[cb,"localhost",v16,1E3]);

JAM.stopProfile('load');
