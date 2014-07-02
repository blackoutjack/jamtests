function runTest() {

  JAM.startProfile('load');
function f() {
    x = 2
  }
  setTimeout(f, 1E3);

  JAM.stopProfile('load');

  return setTimeout(function() { JAMScript.log(typeof x === "undefined"); }, 3000) && "State will be checked in a couple seconds";
}
