function runTest() {

  JAM.startProfile('load');
var a,b=[5,6,7,8],c=[9,10],d=2,e=1,b=c[e],v0=d+1;a=b[v0];

  JAM.stopProfile('load');

  return typeof a === "undefined" && b === 10;
}
