
JAM.startProfile('load');
function hello() {
  return "hello";
}
var a = {get ok() {
  function inner() {
    var f = eval("hello");
    return f() + " whatever";
  }
  return "ok" + inner();
}};
alert(a.ok)

JAM.log("Result: " + (a.ok === "okhello whatever"));

JAM.stopProfile('load');
