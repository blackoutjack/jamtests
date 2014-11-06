function f() {}

  JAM.startProfile('load');
  

  JAM.stopProfile('load');

document.getElementById = f;
var elt = document.getElementById("ok");
