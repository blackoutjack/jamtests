function runTest() {

  JAM.startProfile('load');
  var a=[4,6,8,10,12],b,i=0;b=a[i]+=i+=1;alert("a: "+a+" b: "+b+" i: "+i)

  JAM.stopProfile('load');

  return b === 5 && i === 1;
}
