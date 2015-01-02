
JAM.startProfile('load');
function runTest() {
  var a,b=[5,6,7,8],c=[9,10],d=2,e=1,b=c[e];a=b[d+1]

  return typeof a === "undefined" && b === 10;
}

JAM.stopProfile('load');
