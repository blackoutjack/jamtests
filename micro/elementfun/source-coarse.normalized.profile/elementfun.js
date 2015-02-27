
JAM.startProfile('load');
introspect(JAM.policy.pFull) {
var a = document.getElementById("ok");
a.focus()

JAM.log("Result: " + ("Textbox should have focus"));

}

JAM.stopProfile('load');
