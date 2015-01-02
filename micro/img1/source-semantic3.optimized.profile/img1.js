
JAM.startProfile('load');
function v0(){alert("indexOf 2: "+String.prototype.indexOf)}var html="<img src='notapic.jpg' onerror='String.prototype.indexOf = false' />",elts=document.getElementsByTagName("div"),elt=elts.item(0);JAM.set(elt,"innerHTML",html);alert("indexOf 1: "+String.prototype.indexOf);JAM.call(setTimeout,null,[v0,1E3])

JAM.log("Result: " + " + respred ");

JAM.stopProfile('load');
