function f() {
  x = 2;
  return;
}
setTimeout(f, 1E3)

JAM.log("Result: " + (setTimeout(function() { JAMScript.log(typeof x === "undefined"); }, 3000) && "State will be checked in a couple seconds"));
