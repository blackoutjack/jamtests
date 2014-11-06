var html = "<img src='notapic.jpg' onerror='String.prototype.indexOf = false' />";

  JAM.startProfile('load');
  var elt = document.getElementById("note");
elt.innerHTML = html;

  JAM.stopProfile('load');

alert("indexOf 1: " + String.prototype.indexOf);
setTimeout(function() { alert("indexOf 2: " + String.prototype.indexOf); }, 1000);
