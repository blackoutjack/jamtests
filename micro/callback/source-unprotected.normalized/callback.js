function runTest() {
  function f() {
    x = 2;
    return;
  }
  setTimeout(f, 1E3)

  return setTimeout(function() { JAMScript.log(typeof x === "undefined"); }, 3000) && "State will be checked in a couple seconds";
}
