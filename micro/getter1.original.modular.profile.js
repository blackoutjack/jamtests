function runTest() {

  JAM.startProfile('load');
introspect(JAMScript.introspectors.processAll) {
  function hello() {
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
  }
  alert(a.ok);

  }

  JAM.stopProfile('load');

  return a.ok === "okhello whatever";
}
