function runTest() {
  function f(){introspect(JAM.policy.p6CB626AF3B00A2806871E6DD34E13FD7B9D46DB2)x=2}JAM.call(setTimeout,null,[f,1E3]);

  return setTimeout(function() { JAMScript.log(typeof x === "undefined"); }, 3000) && "State will be checked in a couple seconds";
}
