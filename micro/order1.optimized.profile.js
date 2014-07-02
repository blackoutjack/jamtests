function runTest() {

  JAM.startProfile('load');
function f(){return{ok:"got it!"}}function g(){return"ok"}var v0=f(),v1=g(),v=v0[v1];

  JAM.stopProfile('load');

  return v === "got it!";
}
