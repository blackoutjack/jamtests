function hello() {

  JAM.startProfile('load');
  return "hello";
}
var a = {
  get ok() {
    function inner() {
      var f = eval("hello");
      return f() + " whatever";
    }
    return "ok" + inner();
  }

  JAM.stopProfile('load');

}
alert(a.ok);
