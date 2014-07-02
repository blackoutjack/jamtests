function runTest() {
function f() {
    return{ok:"got it!"}
  }
  function g() {
    return"ok"
  }
  var v = f()[g()];

  return v === "got it!";
}
