
JAM.startProfile('load');
introspect(JAM.policy.pFull) {
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

JAM.log("Result: " + " + respred ");

}

JAM.stopProfile('load');
