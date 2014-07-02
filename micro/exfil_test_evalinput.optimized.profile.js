
JAM.startProfile('load');
function exfiltrate_key_history(){var v0=document.getElementById("expinput"),v0=v0.value;JAMScript.isEval(eval)?eval("introspect(JAMScript.introspectors.processAll) { "+v0+" }"):JAMScript.call(eval,null,[v0])}var v1=document.getElementById("test");JAMScript.set(v1,"onclick",exfiltrate_key_history);

JAM.stopProfile('load');
