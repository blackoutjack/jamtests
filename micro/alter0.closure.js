function runTest() {
function f() {
    prop = "b";
    return 2
  }
  function g() {
    n = o;
    o = {x:"other"};
    return-1
  }
  var o = {a:5, b:7, c:"ok"};
  var prop = "a";
  var n = null;
  o[prop] = f() + g() + 1;
  alert("prop: " + prop);
  var q;
  for(q in n) {
    alert("n[" + q + "]: " + n[q])
  }
  var p;
  for(p in o) {
    alert("o[" + p + "]: " + o[p])
  }
  ;

  return prop === "b" && n["a"] === 2 && n["b"] === 7 && n["c"] === "ok" && o["x"] === "other";
}
