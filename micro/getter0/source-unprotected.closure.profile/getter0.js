
JAM.startProfile('load');
var a = {get ok() {
  return "ok";
}};
alert(a.ok)

JAM.log("Result: " + (a.ok === "ok"));

JAM.stopProfile('load');
