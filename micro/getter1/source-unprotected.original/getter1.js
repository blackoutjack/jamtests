function runTest() {
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

  return a.ok === "okhello whatever";
}
