function runTest() {

  JAM.startProfile('load');
function v0(){var v5=String.prototype,v5=v5.indexOf,v5="indexOf 2: "+v5;alert(v5)}var html="<img src='notapic.jpg' onerror='String.prototype.indexOf = false' />",elt=document.getElementById("note");JAMScript.set(elt,"innerHTML",html);var v6=String.prototype,v4=v6.indexOf,v2="indexOf 1: "+v4;alert(v2);JAMScript.call(setTimeout,null,[v0,1E3]);

  JAM.stopProfile('load');

  return "1st pop-up should print the native function, and the 2nd should print 'false'";
}
