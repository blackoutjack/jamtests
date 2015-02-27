
JAM.startProfile('load');
var html = "<img src='notapic.jpg' onerror='String.prototype.indexOf = false' />";
var elt = document.getElementById("note");
elt.innerHTML = html;
alert("indexOf 1: " + String.prototype.indexOf);
setTimeout(function() {
  alert("indexOf 2: " + String.prototype.indexOf);
}, 1E3)

JAM.log("Result: " + ("1st pop-up should print the native function, and the 2nd should print 'false'"));

JAM.stopProfile('load');
