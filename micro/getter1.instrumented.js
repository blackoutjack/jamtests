function runTest() {
function hello() {
    return"hello"
  }
  function v2() {
    function inner() {
      var f = eval("hello");
      var v0 = f();
      return v0 + " whatever"
    }
    var v1 = inner();
    return"ok" + v1
  }
  var a = {};
  var v4 = {get:v2};
  Object.defineProperty(a, "ok", v4);
  var v3 = a.ok;
  alert(v3);

  return a.ok === "okhello whatever";
}
