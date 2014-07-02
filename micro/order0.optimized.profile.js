function runTest() {

  JAM.startProfile('load');
function f(){return 2}function g(){return 1}var v=5,v2=v,v=v+1,v3=f(),v0=v2+v3,v1=g(),a=v0+v1;

  JAM.stopProfile('load');

  return a === 8;
}
