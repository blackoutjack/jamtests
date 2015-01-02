
JAM.startProfile('load');
x = 1;
var elt = document.getElementById("test");
elt.innerHTML = "<script>x = 2\x3c/script>"

JAM.log("Result: " + " + respred ");

JAM.stopProfile('load');
